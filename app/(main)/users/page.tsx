import { ShieldCheck } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function UsersPage() {
  return (
    <ListPageTemplate
      title="المستخدمون والصلاحيات"
      description="إدارة مستخدمي النظام وتحديد صلاحيات كل دور"
      addLabel="مستخدم جديد"
      searchPlaceholder="ابحث بالاسم أو البريد الإلكتروني..."
      icon={ShieldCheck}
      emptyTitle="لا يوجد مستخدمون بعد"
      emptyDescription="سيتم إنشاء المستخدم الأول تلقائيًا عند ربط نظام المصادقة في Supabase."
      columns={["الاسم", "البريد الإلكتروني", "الدور", "آخر دخول", "الحالة", "إجراءات"]}
    />
  );
}
