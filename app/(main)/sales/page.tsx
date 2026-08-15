import { ShoppingCart } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function SalesPage() {
  return (
    <ListPageTemplate
      title="المبيعات"
      description="سجل عمليات البيع للعملاء"
      addLabel="عملية بيع جديدة"
      searchPlaceholder="ابحث برقم العملية أو اسم العميل..."
      icon={ShoppingCart}
      emptyTitle="لا توجد عمليات بيع بعد"
      emptyDescription="سجّل أول عملية بيع لعميل لمتابعة الإيرادات المرتبطة بها."
      columns={["رقم العملية", "العميل", "التاريخ", "الإجمالي", "المدفوع", "الحالة", "إجراءات"]}
    />
  );
}
