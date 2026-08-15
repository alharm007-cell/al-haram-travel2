"use server";

import { revalidatePath } from "next/cache";
import { createClient } from "@/lib/supabase/server";
import type { CustomerInsert, CustomerUpdate } from "@/types/database";

export interface ActionResult {
  success: boolean;
  error?: string;
}

/**
 * جلب كل العملاء من جدول customers الحقيقي في Supabase.
 * لا توجد أي بيانات وهمية — أي خطأ في الاتصال أو الجدول يُعاد كنص خطأ صريح.
 */
export async function getCustomers() {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("customers")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    return { data: null, error: error.message };
  }
  return { data, error: null };
}

export async function createCustomer(input: CustomerInsert): Promise<ActionResult> {
  const supabase = createClient();

  if (!input.name || !input.name.trim()) {
    return { success: false, error: "اسم العميل مطلوب" };
  }

  const { error } = await supabase.from("customers").insert({
    name: input.name.trim(),
    phone: input.phone || null,
    email: input.email || null,
    address: input.address || null,
    balance: input.balance ?? 0,
    status: input.status ?? "active",
    notes: input.notes || null,
  });

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/clients");
  return { success: true };
}

export async function updateCustomer(id: string, input: CustomerUpdate): Promise<ActionResult> {
  const supabase = createClient();

  if (!id) {
    return { success: false, error: "معرّف العميل مفقود" };
  }

  const { error } = await supabase
    .from("customers")
    .update({
      ...(input.name !== undefined ? { name: input.name } : {}),
      ...(input.phone !== undefined ? { phone: input.phone } : {}),
      ...(input.email !== undefined ? { email: input.email } : {}),
      ...(input.address !== undefined ? { address: input.address } : {}),
      ...(input.balance !== undefined ? { balance: input.balance } : {}),
      ...(input.status !== undefined ? { status: input.status } : {}),
      ...(input.notes !== undefined ? { notes: input.notes } : {}),
      updated_at: new Date().toISOString(),
    })
    .eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/clients");
  return { success: true };
}

export async function deleteCustomer(id: string): Promise<ActionResult> {
  const supabase = createClient();

  const { error } = await supabase.from("customers").delete().eq("id", id);

  if (error) {
    return { success: false, error: error.message };
  }

  revalidatePath("/clients");
  return { success: true };
}
