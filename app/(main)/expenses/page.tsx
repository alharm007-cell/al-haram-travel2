import { Receipt } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function ExpensesPage() {
  return (
    <ListPageTemplate
      title="المصروفات"
      description="سجل مصروفات الشركة التشغيلية والإدارية"
      addLabel="مصروف جديد"
      searchPlaceholder="ابحث بوصف المصروف..."
      icon={Receipt}
      emptyTitle="لا توجد مصروفات مسجّلة بعد"
      emptyDescription="سجّل أول مصروف تشغيلي (إيجار، رواتب، فواتير...) لمتابعته ضمن التقارير المالية."
      columns={["البيان", "التصنيف", "التاريخ", "طريقة الدفع", "المبلغ", "إجراءات"]}
    />
  );
}
