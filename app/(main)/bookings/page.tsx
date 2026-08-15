import { CalendarCheck } from "lucide-react";
import { ListPageTemplate } from "@/components/shared/list-page-template";

export default function BookingsPage() {
  return (
    <ListPageTemplate
      title="الحجوزات"
      description="متابعة حجوزات العملاء وحالتها"
      addLabel="حجز جديد"
      searchPlaceholder="ابحث برقم الحجز أو اسم العميل..."
      icon={CalendarCheck}
      emptyTitle="لا توجد حجوزات بعد"
      emptyDescription="سجّل أول حجز لعميل لمتابعة تفاصيله وربطه بالفواتير والمدفوعات."
      columns={["رقم الحجز", "العميل", "الخدمة", "تاريخ السفر", "الحالة", "إجراءات"]}
    />
  );
}
