"use client";

import { useMemo, useState, useTransition } from "react";
import { Users, Plus, Pencil, Trash2, Loader2 } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";
import { formatCurrency } from "@/lib/utils";
import type { Customer, StatusType } from "@/types/database";
import { createCustomer, updateCustomer, deleteCustomer } from "./actions";

interface CustomersClientProps {
  initialCustomers: Customer[];
  loadError: string | null;
}

interface FormState {
  name: string;
  phone: string;
  email: string;
  address: string;
  balance: string;
  status: StatusType;
  notes: string;
}

const emptyForm: FormState = {
  name: "",
  phone: "",
  email: "",
  address: "",
  balance: "0",
  status: "active",
  notes: "",
};

export function CustomersClient({ initialCustomers, loadError }: CustomersClientProps) {
  const [customers, setCustomers] = useState(initialCustomers);
  const [search, setSearch] = useState("");
  const [dialogOpen, setDialogOpen] = useState(false);
  const [editingId, setEditingId] = useState<string | null>(null);
  const [form, setForm] = useState<FormState>(emptyForm);
  const [formError, setFormError] = useState<string | null>(null);
  const [isPending, startTransition] = useTransition();
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const filtered = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (!q) return customers;
    return customers.filter(
      (c) =>
        c.name?.toLowerCase().includes(q) ||
        c.phone?.toLowerCase().includes(q) ||
        c.email?.toLowerCase().includes(q)
    );
  }, [customers, search]);

  function openAddDialog() {
    setEditingId(null);
    setForm(emptyForm);
    setFormError(null);
    setDialogOpen(true);
  }

  function openEditDialog(customer: Customer) {
    setEditingId(customer.id);
    setForm({
      name: customer.name ?? "",
      phone: customer.phone ?? "",
      email: customer.email ?? "",
      address: customer.address ?? "",
      balance: String(customer.balance ?? 0),
      status: customer.status ?? "active",
      notes: customer.notes ?? "",
    });
    setFormError(null);
    setDialogOpen(true);
  }

  function handleSubmit() {
    setFormError(null);

    if (!form.name.trim()) {
      setFormError("اسم العميل مطلوب");
      return;
    }

    const balanceNum = Number(form.balance);
    if (Number.isNaN(balanceNum)) {
      setFormError("الرصيد يجب أن يكون رقمًا");
      return;
    }

    startTransition(async () => {
      const payload = {
        name: form.name.trim(),
        phone: form.phone.trim() || null,
        email: form.email.trim() || null,
        address: form.address.trim() || null,
        balance: balanceNum,
        status: form.status,
        notes: form.notes.trim() || null,
      };

      const result = editingId
        ? await updateCustomer(editingId, payload)
        : await createCustomer(payload);

      if (!result.success) {
        setFormError(result.error ?? "حدث خطأ غير متوقع");
        return;
      }

      // إعادة تحميل القائمة الفعلية من الخادم (Server Action تُعيد التحقق من المسار،
      // لكن لتحديث الواجهة فورًا هنا أيضًا نطلب البيانات من جديد عبر location refresh بسيط)
      window.location.reload();
    });
  }

  function handleDelete(id: string) {
    if (!confirm("هل أنت متأكد من حذف هذا العميل؟ لا يمكن التراجع عن هذا الإجراء.")) {
      return;
    }
    setDeletingId(id);
    startTransition(async () => {
      const result = await deleteCustomer(id);
      setDeletingId(null);
      if (!result.success) {
        alert(result.error ?? "تعذر حذف العميل");
        return;
      }
      setCustomers((prev) => prev.filter((c) => c.id !== id));
    });
  }

  const statusLabel: Record<string, string> = {
    active: "نشط",
    inactive: "غير نشط",
    pending: "قيد الانتظار",
    completed: "مكتمل",
    cancelled: "ملغي",
  };

  const statusVariant: Record<string, "success" | "secondary" | "warning" | "destructive"> = {
    active: "success",
    inactive: "secondary",
    pending: "warning",
    completed: "success",
    cancelled: "destructive",
  };

  return (
    <div>
      <PageHeader
        title="العملاء"
        description="إدارة بيانات عملاء الشركة وأرصدتهم"
        action={
          <Dialog open={dialogOpen} onOpenChange={setDialogOpen}>
            <DialogTrigger asChild>
              <Button size="default" className="gap-2" onClick={openAddDialog}>
                <Plus className="h-4 w-4" />
                عميل جديد
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>{editingId ? "تعديل بيانات العميل" : "إضافة عميل جديد"}</DialogTitle>
              </DialogHeader>

              <div className="grid grid-cols-1 gap-4 py-2 sm:grid-cols-2">
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label>الاسم *</Label>
                  <Input
                    value={form.name}
                    onChange={(e) => setForm((f) => ({ ...f, name: e.target.value }))}
                    placeholder="اسم العميل"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>رقم الهاتف</Label>
                  <Input
                    value={form.phone}
                    onChange={(e) => setForm((f) => ({ ...f, phone: e.target.value }))}
                    placeholder="+20 1XX XXX XXXX"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>البريد الإلكتروني</Label>
                  <Input
                    type="email"
                    value={form.email}
                    onChange={(e) => setForm((f) => ({ ...f, email: e.target.value }))}
                    placeholder="example@mail.com"
                  />
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label>العنوان</Label>
                  <Input
                    value={form.address}
                    onChange={(e) => setForm((f) => ({ ...f, address: e.target.value }))}
                    placeholder="العنوان بالكامل"
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>الرصيد المستحق</Label>
                  <Input
                    type="number"
                    step="0.01"
                    value={form.balance}
                    onChange={(e) => setForm((f) => ({ ...f, balance: e.target.value }))}
                  />
                </div>
                <div className="flex flex-col gap-2">
                  <Label>الحالة</Label>
                  <Select
                    value={form.status}
                    onValueChange={(v) => setForm((f) => ({ ...f, status: v as StatusType }))}
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="active">نشط</SelectItem>
                      <SelectItem value="inactive">غير نشط</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex flex-col gap-2 sm:col-span-2">
                  <Label>ملاحظات</Label>
                  <Input
                    value={form.notes}
                    onChange={(e) => setForm((f) => ({ ...f, notes: e.target.value }))}
                    placeholder="ملاحظات إضافية (اختياري)"
                  />
                </div>
              </div>

              {formError && (
                <p className="rounded-md bg-destructive/10 px-3 py-2 text-xs text-destructive">
                  {formError}
                </p>
              )}

              <DialogFooter>
                <Button variant="outline" onClick={() => setDialogOpen(false)} disabled={isPending}>
                  إلغاء
                </Button>
                <Button onClick={handleSubmit} disabled={isPending} className="gap-2">
                  {isPending && <Loader2 className="h-4 w-4 animate-spin" />}
                  {editingId ? "حفظ التعديلات" : "إضافة العميل"}
                </Button>
              </DialogFooter>
            </DialogContent>
          </Dialog>
        }
      />

      <Card className="p-4">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Input
            placeholder="ابحث بالاسم أو رقم الهاتف..."
            className="sm:max-w-xs"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {loadError ? (
          <div className="rounded-lg border border-destructive/30 bg-destructive/5 p-4 text-sm text-destructive">
            تعذر تحميل بيانات العملاء من Supabase: {loadError}
          </div>
        ) : (
          <div className="rounded-lg border border-border">
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>الاسم</TableHead>
                  <TableHead>رقم الهاتف</TableHead>
                  <TableHead>البريد الإلكتروني</TableHead>
                  <TableHead>الرصيد المستحق</TableHead>
                  <TableHead>الحالة</TableHead>
                  <TableHead>إجراءات</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {filtered.length === 0 ? (
                  <TableRow className="hover:bg-transparent">
                    <TableCell colSpan={6} className="p-0">
                      <EmptyState
                        icon={Users}
                        title="لا يوجد عملاء بعد"
                        description="ابدأ بإضافة أول عميل لشركتك لمتابعة حجوزاته ومدفوعاته وكشف حسابه."
                      />
                    </TableCell>
                  </TableRow>
                ) : (
                  filtered.map((customer) => (
                    <TableRow key={customer.id}>
                      <TableCell className="font-medium">{customer.name}</TableCell>
                      <TableCell>{customer.phone || "—"}</TableCell>
                      <TableCell>{customer.email || "—"}</TableCell>
                      <TableCell>{formatCurrency(customer.balance ?? 0)}</TableCell>
                      <TableCell>
                        <Badge variant={statusVariant[customer.status] ?? "secondary"}>
                          {statusLabel[customer.status] ?? customer.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => openEditDialog(customer)}
                            title="تعديل"
                          >
                            <Pencil className="h-4 w-4" />
                          </Button>
                          <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => handleDelete(customer.id)}
                            disabled={isPending && deletingId === customer.id}
                            title="حذف"
                          >
                            {isPending && deletingId === customer.id ? (
                              <Loader2 className="h-4 w-4 animate-spin" />
                            ) : (
                              <Trash2 className="h-4 w-4 text-destructive" />
                            )}
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))
                )}
              </TableBody>
            </Table>
          </div>
        )}
      </Card>
    </div>
  );
}
