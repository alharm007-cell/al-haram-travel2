import Link from "next/link";
import { Compass } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center gap-4 bg-sand-50 p-6 text-center">
      <div className="flex h-16 w-16 items-center justify-center rounded-full bg-primary-100 text-primary-700">
        <Compass className="h-8 w-8" />
      </div>
      <h1 className="font-display text-3xl font-extrabold text-primary-900">
        الصفحة غير موجودة
      </h1>
      <p className="max-w-sm text-sm text-muted-foreground">
        يبدو أنك خرجت عن المسار المخطط له. تحقق من الرابط أو عد إلى لوحة التحكم.
      </p>
      <Button asChild>
        <Link href="/dashboard">العودة إلى لوحة التحكم</Link>
      </Button>
    </div>
  );
}
