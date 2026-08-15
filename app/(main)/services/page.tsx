import { Package } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function ServicesPage() {
  return (
    <ListPageTemplate
      title="الخدمات"
      description="الخدمات السياحية التي تقدمها الشركة (تذاكر، فنادق، برامج سياحية، تأشيرات...)"
      addLabel="خدمة جديدة"
      searchPlaceholder="ابحث باسم الخدمة..."
      icon={Package}
      emptyTitle="لا توجد خدمات بعد"
      emptyDescription="أضف الخدمات التي تبيعها شركتك مثل تذاكر الطيران، الحجوزات الفندقية، والبرامج السياحية."
      columns={["اسم الخدمة", "التصنيف", "سعر البيع", "التكلفة", "الحالة", "إجراءات"]}
    />
  );
}
