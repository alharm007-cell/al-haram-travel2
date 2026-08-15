import {
  BarChart3,
  TrendingUp,
  Users,
  Building2,
  CalendarCheck,
  Wallet,
  PieChart,
  FileBarChart,
} from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent } from "@/components/ui/card";

const reports = [
  {
    title: "تقرير الأرباح والخسائر",
    description: "مقارنة الإيرادات بالمصروفات خلال فترة محددة",
    icon: TrendingUp,
  },
  {
    title: "تقرير المبيعات",
    description: "تفصيل عمليات البيع حسب الخدمة أو العميل أو الفترة",
    icon: BarChart3,
  },
  {
    title: "تقرير أعمار الديون",
    description: "أرصدة العملاء المستحقة مصنّفة حسب فترة التأخير",
    icon: Users,
  },
  {
    title: "تقرير مستحقات الموردين",
    description: "أرصدة الموردين المستحقة الدفع",
    icon: Building2,
  },
  {
    title: "تقرير الحجوزات",
    description: "إحصائيات الحجوزات حسب الوجهة والحالة والفترة",
    icon: CalendarCheck,
  },
  {
    title: "التدفقات النقدية",
    description: "حركة الصندوق والبنك خلال فترة محددة",
    icon: Wallet,
  },
  {
    title: "الميزان المراجعة",
    description: "أرصدة جميع الحسابات في تاريخ معين",
    icon: PieChart,
  },
  {
    title: "تقرير مخصص",
    description: "أنشئ تقريرًا بحقول ومرشحات من اختيارك",
    icon: FileBarChart,
  },
];

export default function ReportsPage() {
  return (
    <div>
      <PageHeader
        title="التقارير"
        description="تقارير مالية وتشغيلية جاهزة لدعم قراراتك"
      />

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        {reports.map((report) => {
          const Icon = report.icon;
          return (
            <Card
              key={report.title}
              className="cursor-pointer p-5 transition-shadow hover:shadow-md"
            >
              <CardContent className="flex flex-col gap-3 p-0">
                <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                  <Icon className="h-5 w-5" />
                </div>
                <div>
                  <h3 className="font-display text-sm font-bold">{report.title}</h3>
                  <p className="mt-1 text-xs leading-relaxed text-muted-foreground">
                    {report.description}
                  </p>
                </div>
              </CardContent>
            </Card>
          );
        })}
      </div>

      <Card className="mt-6 p-6 text-center text-sm text-muted-foreground">
        ستُبنى التقارير تلقائيًا من بيانات النظام الفعلية بعد ربط قاعدة بيانات Supabase.
      </Card>
    </div>
  );
}
