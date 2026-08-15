import { Landmark, Wallet, Plus, ArrowLeftRight } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function TreasuryPage() {
  return (
    <div>
      <PageHeader
        title="الصندوق والبنك"
        description="إدارة حسابات النقدية والحسابات البنكية وحركاتها"
        action={
          <div className="flex gap-2">
            <Button variant="outline" className="gap-2">
              <ArrowLeftRight className="h-4 w-4" />
              تحويل بين الحسابات
            </Button>
            <Button className="gap-2">
              <Plus className="h-4 w-4" />
              حساب جديد
            </Button>
          </div>
        }
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-3">
        <Card className="border-dashed p-5">
          <CardContent className="flex flex-col items-center gap-3 p-0 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary-100 text-primary-700">
              <Wallet className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold">صندوق نقدي</h3>
              <p className="mt-1 text-xs text-muted-foreground">لم يُضَف بعد</p>
            </div>
            <Button variant="ghost" size="sm">
              إضافة صندوق
            </Button>
          </CardContent>
        </Card>

        <Card className="border-dashed p-5">
          <CardContent className="flex flex-col items-center gap-3 p-0 text-center">
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gold-100 text-gold-700">
              <Landmark className="h-6 w-6" />
            </div>
            <div>
              <h3 className="font-display text-sm font-bold">حساب بنكي</h3>
              <p className="mt-1 text-xs text-muted-foreground">لم يُضَف بعد</p>
            </div>
            <Button variant="ghost" size="sm">
              إضافة حساب بنكي
            </Button>
          </CardContent>
        </Card>
      </div>

      <Card className="mt-6">
        <CardContent className="pt-6">
          <EmptyState
            icon={Landmark}
            title="لا توجد حركات نقدية أو بنكية بعد"
            description="بمجرد إضافة حساب صندوق أو بنك، ستظهر هنا جميع الإيداعات والسحوبات والتحويلات."
          />
        </CardContent>
      </Card>
    </div>
  );
}
