import { Building2 } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function SuppliersPage() {
  return (
    <ListPageTemplate
      title="الموردون"
      description="إدارة موردي الخدمات السياحية (فنادق، طيران، نقل...)"
      addLabel="مورد جديد"
      searchPlaceholder="ابحث باسم المورد..."
      icon={Building2}
      emptyTitle="لا يوجد موردون بعد"
      emptyDescription="أضف الموردين الذين تتعامل معهم مثل شركات الطيران والفنادق وشركات النقل."
      columns={["اسم المورد", "نوع الخدمة", "رقم الهاتف", "الرصيد المستحق", "الحالة", "إجراءات"]}
    />
  );
}
