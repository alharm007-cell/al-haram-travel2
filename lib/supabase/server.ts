import { createServerClient, type CookieOptions } from "@supabase/ssr";
import { cookies } from "next/headers";
import type { Database } from "@/types/database";

type CookieToSet = { name: string; value: string; options: CookieOptions };

/**
 * عميل Supabase الخاص بالخادم (Server Components / Route Handlers / Server Actions).
 * يجب استدعاؤه داخل كل طلب لأنه يعتمد على cookies() الخاصة بالطلب الحالي.
 */
export function createClient() {
  const cookieStore = cookies();

  return createServerClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!,
    {
      cookies: {
        getAll() {
          return cookieStore.getAll();
        },
        setAll(cookiesToSet: CookieToSet[]) {
          try {
            cookiesToSet.forEach(({ name, value, options }) =>
              cookieStore.set(name, value, options)
            );
          } catch {
            // يمكن تجاهل الخطأ عند الاستدعاء من Server Component بدون إمكانية الكتابة
          }
        },
      },
    }
  );
}
