import { ShoppingBag } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function PurchasesPage() {
  return (
    <ListPageTemplate
      title="المشتريات"
      description="سجل عمليات الشراء من الموردين"
      addLabel="عملية شراء جديدة"
      searchPlaceholder="ابحث برقم العملية أو اسم المورد..."
      icon={ShoppingBag}
      emptyTitle="لا توجد عمليات شراء بعد"
      emptyDescription="سجّل أول عملية شراء من مورد لمتابعة التكاليف المرتبطة بها."
      columns={["رقم العملية", "المورد", "التاريخ", "الإجمالي", "المدفوع", "الحالة", "إجراءات"]}
    />
  );
}
