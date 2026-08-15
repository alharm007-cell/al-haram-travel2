import { Database, CheckCircle2, XCircle, AlertTriangle } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { createClient } from "@/lib/supabase/server";

const hasEnvVars =
  !!process.env.NEXT_PUBLIC_SUPABASE_URL && !!process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY;

interface ConnectionTestResult {
  ok: boolean;
  message: string;
}

async function testSupabaseConnection(): Promise<ConnectionTestResult> {
  if (!hasEnvVars) {
    return { ok: false, message: "متغيرات البيئة غير مكتملة (URL أو Publishable Key مفقود)" };
  }
  try {
    const supabase = createClient();
    const { error, count } = await supabase
      .from("currencies")
      .select("*", { count: "exact", head: true });

    if (error) {
      return { ok: false, message: error.message };
    }
    return { ok: true, message: `تم الاتصال بنجاح — عدد صفوف جدول currencies: ${count ?? 0}` };
  } catch (err) {
    return { ok: false, message: err instanceof Error ? err.message : "خطأ غير معروف في الاتصال" };
  }
}

export default async function SettingsPage() {
  const connectionTest = await testSupabaseConnection();
  const isSupabaseConnected = connectionTest.ok;

  return (
    <div>
      <PageHeader title="الإعدادات" description="بيانات الشركة وإعدادات النظام العامة" />

      <Tabs defaultValue="company" className="w-full">
        <TabsList>
          <TabsTrigger value="company">بيانات الشركة</TabsTrigger>
          <TabsTrigger value="finance">العملة والترقيم</TabsTrigger>
          <TabsTrigger value="database">قاعدة البيانات</TabsTrigger>
        </TabsList>

        <TabsContent value="company">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>بيانات الشركة</CardTitle>
              <CardDescription>تظهر هذه البيانات في الفواتير والمستندات المطبوعة</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label>اسم الشركة</Label>
                <Input defaultValue="الهرم ترافيل" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>الرقم الضريبي</Label>
                <Input placeholder="000-000-000" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>رقم الهاتف</Label>
                <Input placeholder="+20 1XX XXX XXXX" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>البريد الإلكتروني</Label>
                <Input placeholder="info@alharam-travel.com" />
              </div>
              <div className="flex flex-col gap-2 sm:col-span-2">
                <Label>العنوان</Label>
                <Input placeholder="العنوان بالكامل" />
              </div>
              <div className="sm:col-span-2">
                <Button>حفظ التغييرات</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="finance">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>العملة والترقيم</CardTitle>
              <CardDescription>تحكم في العملة الافتراضية وتسلسل ترقيم الفواتير</CardDescription>
            </CardHeader>
            <CardContent className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <div className="flex flex-col gap-2">
                <Label>العملة الافتراضية</Label>
                <Input defaultValue="جنيه مصري (EGP)" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>بادئة رقم الفاتورة</Label>
                <Input defaultValue="INV-" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>بادئة رقم الحجز</Label>
                <Input defaultValue="BK-" />
              </div>
              <div className="flex flex-col gap-2">
                <Label>نسبة الضريبة الافتراضية %</Label>
                <Input defaultValue="14" />
              </div>
              <div className="sm:col-span-2">
                <Button>حفظ التغييرات</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="database">
          <Card className="max-w-2xl">
            <CardHeader>
              <CardTitle>حالة الاتصال بقاعدة البيانات</CardTitle>
              <CardDescription>حالة ربط المشروع بقاعدة بيانات Supabase</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="flex items-center justify-between rounded-lg border border-border p-4">
                <div className="flex items-center gap-3">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-700">
                    <Database className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold">Supabase</p>
                    <p className="text-xs text-muted-foreground">
                      {isSupabaseConnected
                        ? "المشروع متصل بقاعدة بيانات Supabase"
                        : "لم يتم ربط قاعدة بيانات بعد"}
                    </p>
                  </div>
                </div>
                {isSupabaseConnected ? (
                  <Badge variant="success" className="gap-1">
                    <CheckCircle2 className="h-3.5 w-3.5" />
                    متصل
                  </Badge>
                ) : (
                  <Badge variant="destructive" className="gap-1">
                    <XCircle className="h-3.5 w-3.5" />
                    غير متصل
                  </Badge>
                )}
              </div>
              <div
                className={`mt-4 flex items-start gap-2 rounded-lg border p-3 text-xs leading-relaxed ${
                  isSupabaseConnected
                    ? "border-success/30 bg-success/5 text-success"
                    : "border-destructive/30 bg-destructive/5 text-destructive"
                }`}
              >
                {isSupabaseConnected ? (
                  <CheckCircle2 className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                ) : (
                  <AlertTriangle className="mt-0.5 h-3.5 w-3.5 shrink-0" />
                )}
                <span>نتيجة اختبار الاتصال بجدول currencies: {connectionTest.message}</span>
              </div>

              <p className="mt-4 text-xs leading-relaxed text-muted-foreground">
                لربط المشروع، أضف القيم NEXT_PUBLIC_SUPABASE_URL و NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY
                في ملف <code className="rounded bg-secondary px-1">.env.local</code>{" "}
                أو ضمن إعدادات المشروع على Vercel، ثم أعد تشغيل الخادم. لا يستخدم هذا المشروع
                Secret Key أو Service Role Key.
              </p>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  );
}
