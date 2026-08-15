import { FileSpreadsheet } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function InvoicesPage() {
  return (
    <ListPageTemplate
      title="الفواتير"
      description="إصدار ومتابعة فواتير المبيعات والمشتريات"
      addLabel="فاتورة جديدة"
      searchPlaceholder="ابحث برقم الفاتورة..."
      icon={FileSpreadsheet}
      emptyTitle="لا توجد فواتير بعد"
      emptyDescription="أصدر أول فاتورة مرتبطة بعملية بيع أو حجز لعرضها هنا وطباعتها."
      columns={["رقم الفاتورة", "النوع", "الجهة", "التاريخ", "الإجمالي", "الحالة", "إجراءات"]}
    />
  );
}
