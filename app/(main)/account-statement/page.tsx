import { FileText, Printer } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function AccountStatementPage() {
  return (
    <div>
      <PageHeader
        title="كشف الحساب"
        description="عرض تفصيلي لحركة حساب عميل أو مورد خلال فترة محددة"
        action={
          <Button variant="outline" className="gap-2">
            <Printer className="h-4 w-4" />
            طباعة الكشف
          </Button>
        }
      />

      <Card className="mb-6 p-5">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
          <div className="flex flex-col gap-2">
            <Label>نوع الحساب</Label>
            <Select defaultValue="client">
              <SelectTrigger>
                <SelectValue placeholder="اختر النوع" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="client">عميل</SelectItem>
                <SelectItem value="supplier">مورد</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>الاسم</Label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="لا توجد بيانات بعد" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="none" disabled>
                  لا توجد بيانات بعد
                </SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className="flex flex-col gap-2">
            <Label>الفترة</Label>
            <Select defaultValue="month">
              <SelectTrigger>
                <SelectValue placeholder="اختر الفترة" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="month">هذا الشهر</SelectItem>
                <SelectItem value="quarter">هذا الربع</SelectItem>
                <SelectItem value="year">هذه السنة</SelectItem>
                <SelectItem value="custom">فترة مخصصة</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>
      </Card>

      <Card>
        <CardContent className="pt-6">
          <EmptyState
            icon={FileText}
            title="اختر عميلًا أو موردًا لعرض كشف الحساب"
            description="سيعرض كشف الحساب كل الحركات المالية (فواتير، دفعات، أرصدة) بشكل زمني بمجرد ربط البيانات."
          />
        </CardContent>
      </Card>
    </div>
  );
}
