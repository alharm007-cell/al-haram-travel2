import { Calculator } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function AccountsPage() {
  return (
    <ListPageTemplate
      title="الحسابات"
      description="شجرة الحسابات المحاسبية للشركة"
      addLabel="حساب جديد"
      searchPlaceholder="ابحث باسم الحساب أو رقمه..."
      icon={Calculator}
      emptyTitle="لم يتم إعداد شجرة الحسابات بعد"
      emptyDescription="أنشئ الحسابات الرئيسية والفرعية (أصول، خصوم، إيرادات، مصروفات) لبناء نظامك المحاسبي."
      columns={["رقم الحساب", "اسم الحساب", "النوع", "الحساب الرئيسي", "الرصيد", "إجراءات"]}
    />
  );
}
