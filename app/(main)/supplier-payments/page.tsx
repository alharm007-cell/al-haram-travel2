import { Banknote } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function SupplierPaymentsPage() {
  return (
    <ListPageTemplate
      title="دفعات الموردين"
      description="سجل المبالغ المدفوعة للموردين"
      addLabel="تسجيل دفعة"
      searchPlaceholder="ابحث باسم المورد أو رقم الإيصال..."
      icon={Banknote}
      emptyTitle="لا توجد دفعات مسجّلة بعد"
      emptyDescription="سجّل أول دفعة لمورد لتحديث رصيده وكشف حسابه تلقائيًا."
      columns={["رقم الإيصال", "المورد", "التاريخ", "طريقة الدفع", "المبلغ", "إجراءات"]}
    />
  );
}
