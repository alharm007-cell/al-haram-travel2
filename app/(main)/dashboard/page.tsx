import {
  Users,
  CalendarCheck,
  Wallet,
  Receipt,
  TrendingUp,
  PlaneTakeoff,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { StatCard } from "@/components/shared/stat-card";
import { EmptyState } from "@/components/shared/empty-state";
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";

export default function DashboardPage() {
  return (
    <div>
      <PageHeader
        title="لوحة التحكم"
        description="نظرة عامة على أداء الشركة اليوم"
        action={
          <Button className="gap-2">
            <PlaneTakeoff className="h-4 w-4" />
            حجز جديد
          </Button>
        }
      />

      {/* بطاقات المؤشرات الرئيسية */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <StatCard label="إجمالي العملاء" value="0" icon={Users} tone="primary" />
        <StatCard label="الحجوزات النشطة" value="0" icon={CalendarCheck} tone="gold" />
        <StatCard label="إيرادات الشهر" value="٠٫٠٠ ج.م" icon={TrendingUp} tone="success" />
        <StatCard label="مصروفات الشهر" value="٠٫٠٠ ج.م" icon={Receipt} tone="default" />
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-3">
        {/* أحدث الحجوزات */}
        <Card className="xl:col-span-2">
          <CardHeader>
            <CardTitle>أحدث الحجوزات</CardTitle>
            <CardDescription>آخر الحجوزات المسجّلة في النظام</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={CalendarCheck}
              title="لا توجد حجوزات بعد"
              description="بمجرد ربط قاعدة البيانات وتسجيل أول حجز، ستظهر هنا أحدث الحجوزات تلقائيًا."
              actionLabel="إنشاء حجز جديد"
            />
          </CardContent>
        </Card>

        {/* حالة الصندوق والبنك */}
        <Card>
          <CardHeader>
            <CardTitle>الصندوق والبنك</CardTitle>
            <CardDescription>أرصدة الحسابات النقدية والبنكية</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={Wallet}
              title="لا توجد أرصدة بعد"
              description="أضف حساب الصندوق أو البنك من صفحة الصندوق والبنك لعرض الأرصدة هنا."
            />
          </CardContent>
        </Card>
      </div>

      <div className="mt-6 grid grid-cols-1 gap-6 xl:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>العملاء المستحق عليهم دفعات</CardTitle>
            <CardDescription>أعلى الأرصدة المدينة للعملاء</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={Users}
              title="لا توجد بيانات مستحقات"
              description="ستظهر هنا قائمة العملاء ذوي الأرصدة المستحقة بعد تسجيل الفواتير والمبيعات."
            />
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>مستحقات الموردين</CardTitle>
            <CardDescription>أعلى الأرصدة الدائنة للموردين</CardDescription>
          </CardHeader>
          <CardContent>
            <EmptyState
              icon={Receipt}
              title="لا توجد بيانات مستحقات"
              description="ستظهر هنا قائمة الموردين ذوي الأرصدة المستحقة بعد تسجيل المشتريات."
            />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
