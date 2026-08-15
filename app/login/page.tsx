import { Lock, Mail } from "lucide-react";
import { BrandMark } from "@/components/layout/brand-mark";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

export default function LoginPage() {
  return (
    <div className="grid min-h-screen lg:grid-cols-2">
      {/* الجهة المرئية */}
      <div className="relative hidden flex-col justify-between overflow-hidden bg-primary-900 p-10 text-white lg:flex">
        <div className="pattern-bg pointer-events-none absolute inset-0 opacity-40" />
        <div className="relative flex items-center gap-3">
          <BrandMark className="h-9 w-9" />
          <span className="font-display text-lg font-extrabold">الهرم ترافيل</span>
        </div>

        <div className="relative max-w-md">
          <p className="font-display text-3xl font-extrabold leading-tight">
            كل عمليات شركتك السياحية، في مكان واحد
          </p>
          <p className="mt-4 text-sm leading-relaxed text-primary-100/80">
            الحجوزات، الفواتير، الحسابات، والتقارير — نظام واحد مصمم خصيصًا
            لشركات السياحة والسفر باللغة العربية بالكامل.
          </p>
        </div>

        <p className="relative text-xs text-primary-200/60">
          © {new Date().getFullYear()} الهرم ترافيل. جميع الحقوق محفوظة.
        </p>
      </div>

      {/* نموذج الدخول */}
      <div className="flex items-center justify-center bg-sand-50 p-6 lg:p-10">
        <div className="w-full max-w-sm">
          <div className="mb-8 flex flex-col items-center gap-3 text-center lg:hidden">
            <BrandMark className="h-10 w-10" />
            <span className="font-display text-lg font-extrabold text-primary-900">
              الهرم ترافيل
            </span>
          </div>

          <h1 className="font-display text-2xl font-extrabold text-primary-900">
            تسجيل الدخول
          </h1>
          <p className="mt-1 text-sm text-muted-foreground">
            أدخل بياناتك للوصول إلى لوحة التحكم
          </p>

          <form className="mt-8 flex flex-col gap-5">
            <div className="flex flex-col gap-2">
              <Label htmlFor="email">البريد الإلكتروني</Label>
              <div className="relative">
                <Mail className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="email" type="email" placeholder="name@company.com" className="pr-9" required />
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">كلمة المرور</Label>
                <a href="#" className="text-xs font-medium text-primary-700 hover:underline">
                  نسيت كلمة المرور؟
                </a>
              </div>
              <div className="relative">
                <Lock className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
                <Input id="password" type="password" placeholder="••••••••" className="pr-9" required />
              </div>
            </div>

            <Button type="submit" size="lg" className="mt-2 w-full">
              دخول
            </Button>

            <p className="rounded-lg bg-secondary px-4 py-3 text-center text-xs leading-relaxed text-muted-foreground">
              تسجيل الدخول غير مُفعّل بعد — بانتظار ربط مشروع Supabase.
            </p>
          </form>
        </div>
      </div>
    </div>
  );
}
