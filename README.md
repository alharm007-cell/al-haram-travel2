# الهرم ترافيل — نظام إدارة ومحاسبة السياحة والسفر

نظام إدارة ومحاسبة احترافي متكامل لشركات السياحة والسفر، مبني بالكامل بواجهة عربية RTL.

## التقنيات المستخدمة

- **Next.js 14** (App Router) + **TypeScript**
- **Tailwind CSS** + **shadcn/ui** (مكونات مكتوبة يدويًا بنفس أسلوب shadcn)
- **Supabase** (المصادقة + قاعدة بيانات PostgreSQL) — عبر `@supabase/ssr`
- خطوط عربية: **Cairo** (العناوين) و **Tajawal** (النصوص)
- جاهز للنشر المباشر على **Vercel**

## هيكل المشروع

```
app/
  layout.tsx              التخطيط الجذري (RTL + الخطوط)
  page.tsx                تحويل إلى /dashboard
  login/page.tsx           صفحة تسجيل الدخول
  (main)/                  المجموعة المحمية (الشريط الجانبي + الهيدر)
    layout.tsx
    dashboard/             لوحة التحكم
    clients/                العملاء
    suppliers/              الموردون
    services/               الخدمات
    bookings/               الحجوزات
    sales/                  المبيعات
    purchases/              المشتريات
    client-payments/        دفعات العملاء
    supplier-payments/      دفعات الموردين
    expenses/               المصروفات
    accounts/               الحسابات
    account-statement/      كشف الحساب
    invoices/               الفواتير
    reports/                التقارير
    treasury/                الصندوق والبنك
    users/                  المستخدمون والصلاحيات
    settings/               الإعدادات
components/
  ui/                       مكونات shadcn/ui الأساسية (Button, Card, Table...)
  layout/                   الشريط الجانبي، الهيدر، الشعار
  shared/                   قوالب مشتركة (PageHeader, StatCard, EmptyState, ListPageTemplate)
lib/
  supabase/                 عملاء Supabase (client.ts, server.ts, middleware.ts)
  constants/nav.ts          تعريف عناصر القائمة الجانبية
  utils.ts                  دوال مساعدة (cn, formatCurrency, formatDate)
types/database.ts          نوع بيانات مؤقت لقاعدة البيانات (سيُستبدل بعد الربط)
middleware.ts               حماية المسارات عبر جلسة Supabase
```

## الحالة الحالية

تم بناء **الهيكل الكامل والواجهات لجميع الوحدات الـ 17** بدون أي بيانات وهمية (Mock Data).
كل صفحة قائمة تعرض حالة فارغة احترافية (Empty State) لحين ربط قاعدة البيانات الفعلية،
حتى لا يختلط أي محتوى تجريبي بالنظام الحقيقي.

لم يتم إنشاء أي مشروع Supabase جديد — الملفات في `lib/supabase/` جاهزة للاتصال
بمشروعك الحالي فور إضافة متغيرات البيئة.

## خطوات التشغيل محليًا

> **ملاحظة:** تثبيت الحزم يتطلب اتصالاً بالإنترنت، ويجب تنفيذه على جهازك (بيئة التطوير هنا لا تملك وصولاً للشبكة).

```bash
# 1) تثبيت الحزم
npm install

# 2) نسخ ملف متغيرات البيئة
cp .env.example .env.local
# ثم عدّل القيم داخل .env.local لاحقًا عند ربط Supabase

# 3) تشغيل خادم التطوير
npm run dev
```

يعمل التطبيق افتراضيًا على: http://localhost:3000

## ربط Supabase (الخطوة القادمة)

1. افتح مشروع Supabase الحالي الخاص بك (المشروع نفسه، لا تُنشئ مشروعًا جديدًا).
2. من **Project Settings → API Keys** انسخ:
   - `Project URL` → ضعه في `NEXT_PUBLIC_SUPABASE_URL`
   - `Publishable key` → ضعه في `NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY`
   - **لا تستخدم** `Secret key` / `service_role key` في هذا المشروع إطلاقًا — كل الوصول يتم عبر Publishable Key + سياسات RLS.
3. ضع القيم في `.env.local` (محليًا) وفي **Environment Variables** بإعدادات مشروع Vercel (للنشر).
4. بعد ذلك يمكن توليد الأنواع الفعلية لقاعدة البيانات:
   ```bash
   npx supabase gen types typescript --project-id <PROJECT_ID> > types/database.ts
   ```
5. من هنا نبدأ سويًا في: تصميم الجداول (Schema)، وربط كل صفحة باستعلامات Supabase الفعلية،
   وتفعيل تسجيل الدخول والصلاحيات (Row Level Security).

## النشر على Vercel

1. ارفع المشروع إلى مستودع GitHub/GitLab.
2. أنشئ مشروعًا جديدًا في Vercel واربطه بالمستودع (يتم اكتشاف Next.js تلقائيًا).
3. أضف متغيرات البيئة الثلاثة أعلاه في **Project Settings → Environment Variables**.
4. اضغط Deploy.

## الهوية البصرية

- اللون الأساسي: نيلي غامق `#175450` (يرمز لنهر النيل).
- لون التمييز: ذهبي `#C9A227` (يرمز لأهرامات الجيزة).
- خلفية دافئة رملية `#FAF7F2`.
- خط العناوين: **Cairo** (وزن ثقيل) — خط النصوص: **Tajawal**.
