import { createBrowserClient } from "@supabase/ssr";
import type { Database } from "@/types/database";

/**
 * عميل Supabase الخاص بالمتصفح (Client Components).
 * يعتمد على متغيرات البيئة NEXT_PUBLIC_SUPABASE_URL و NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY.
 */
export function createClient() {
  return createBrowserClient<Database>(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_PUBLISHABLE_KEY!
  );
}
