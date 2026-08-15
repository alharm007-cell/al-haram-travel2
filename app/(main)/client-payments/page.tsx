import { Wallet } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function ClientPaymentsPage() {
  return (
    <ListPageTemplate
      title="دفعات العملاء"
      description="سجل المبالغ المُحصّلة من العملاء"
      addLabel="تسجيل دفعة"
      searchPlaceholder="ابحث باسم العميل أو رقم الإيصال..."
      icon={Wallet}
      emptyTitle="لا توجد دفعات مسجّلة بعد"
      emptyDescription="سجّل أول دفعة مستلمة من عميل لتحديث رصيده وكشف حسابه تلقائيًا."
      columns={["رقم الإيصال", "العميل", "التاريخ", "طريقة الدفع", "المبلغ", "إجراءات"]}
    />
  );
}
