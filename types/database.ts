/**
 * أنواع قاعدة بيانات Supabase — مشروع "الهرم ترافيل".
 *
 * ⚠️ ملاحظة مهمة:
 * تم بناء هذا الملف يدويًا اعتمادًا على أسماء الجداول التي زوّدتنا بها فقط
 * (customers, suppliers, services, bookings, sales, purchases, customer_payments,
 * supplier_payments, expenses, accounts, account_transactions, invoices,
 * invoice_items, cash_accounts, bank_accounts, currencies, exchange_rates,
 * profiles, settings, audit_logs) لأننا لا نملك اتصالاً مباشرًا بقاعدة البيانات
 * لتوليد الأنواع تلقائيًا (لا نستخدم Service Role Key، ولا يوجد وصول شبكي مباشر
 * لقاعدة Supabase من بيئة التوليد الحالية).
 *
 * الأعمدة أدناه هي أفضل تخمين منطقي بناءً على تصميم النظام. إذا اختلفت أي
 * تسمية عمود عن قاعدتك الفعلية، عدّلها هنا فقط (مكان واحد) ثم أعد التشغيل.
 *
 * للحصول على الأنواع الدقيقة 100% لاحقًا، شغّل من جهازك (خارج هذه البيئة):
 *   npx supabase login
 *   npx supabase gen types typescript --project-id qhhehtzcdvwpgftenipb > types/database.ts
 */

export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type StatusType = "active" | "inactive" | "pending" | "completed" | "cancelled";

export interface Database {
  public: {
    Tables: {
      customers: {
        Row: {
          id: string;
          name: string;
          phone: string | null;
          email: string | null;
          address: string | null;
          balance: number;
          status: StatusType;
          notes: string | null;
          created_at: string;
          updated_at: string | null;
        };
        Insert: {
          id?: string;
          name: string;
          phone?: string | null;
          email?: string | null;
          address?: string | null;
          balance?: number;
          status?: StatusType;
          notes?: string | null;
          created_at?: string;
          updated_at?: string | null;
        };
        Update: {
          id?: string;
          name?: string;
          phone?: string | null;
          email?: string | null;
          address?: string | null;
          balance?: number;
          status?: StatusType;
          notes?: string | null;
          created_at?: string;
          updated_at?: string | null;
        };
        Relationships: [];
      };
      suppliers: {
        Row: {
          id: string;
          name: string;
          phone: string | null;
          email: string | null;
          address: string | null;
          balance: number;
          status: StatusType;
          notes: string | null;
          created_at: string;
          updated_at: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["suppliers"]["Row"]> & { name: string };
        Update: Partial<Database["public"]["Tables"]["suppliers"]["Row"]>;
        Relationships: [];
      };
      services: {
        Row: {
          id: string;
          name: string;
          description: string | null;
          price: number;
          currency_id: string | null;
          category: string | null;
          is_active: boolean;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["services"]["Row"]> & { name: string; price: number };
        Update: Partial<Database["public"]["Tables"]["services"]["Row"]>;
        Relationships: [];
      };
      bookings: {
        Row: {
          id: string;
          customer_id: string | null;
          service_id: string | null;
          booking_date: string;
          status: StatusType;
          total_amount: number;
          currency_id: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["bookings"]["Row"]> & { booking_date: string };
        Update: Partial<Database["public"]["Tables"]["bookings"]["Row"]>;
        Relationships: [];
      };
      sales: {
        Row: {
          id: string;
          customer_id: string | null;
          booking_id: string | null;
          amount: number;
          currency_id: string | null;
          sale_date: string;
          status: StatusType;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["sales"]["Row"]> & { amount: number; sale_date: string };
        Update: Partial<Database["public"]["Tables"]["sales"]["Row"]>;
        Relationships: [];
      };
      purchases: {
        Row: {
          id: string;
          supplier_id: string | null;
          amount: number;
          currency_id: string | null;
          purchase_date: string;
          status: StatusType;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["purchases"]["Row"]> & { amount: number; purchase_date: string };
        Update: Partial<Database["public"]["Tables"]["purchases"]["Row"]>;
        Relationships: [];
      };
      customer_payments: {
        Row: {
          id: string;
          customer_id: string;
          amount: number;
          currency_id: string | null;
          payment_date: string;
          method: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["customer_payments"]["Row"]> & {
          customer_id: string;
          amount: number;
        };
        Update: Partial<Database["public"]["Tables"]["customer_payments"]["Row"]>;
        Relationships: [];
      };
      supplier_payments: {
        Row: {
          id: string;
          supplier_id: string;
          amount: number;
          currency_id: string | null;
          payment_date: string;
          method: string | null;
          notes: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["supplier_payments"]["Row"]> & {
          supplier_id: string;
          amount: number;
        };
        Update: Partial<Database["public"]["Tables"]["supplier_payments"]["Row"]>;
        Relationships: [];
      };
      expenses: {
        Row: {
          id: string;
          category: string | null;
          amount: number;
          currency_id: string | null;
          expense_date: string;
          notes: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["expenses"]["Row"]> & { amount: number; expense_date: string };
        Update: Partial<Database["public"]["Tables"]["expenses"]["Row"]>;
        Relationships: [];
      };
      accounts: {
        Row: {
          id: string;
          name: string;
          type: string | null;
          currency_id: string | null;
          balance: number;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["accounts"]["Row"]> & { name: string };
        Update: Partial<Database["public"]["Tables"]["accounts"]["Row"]>;
        Relationships: [];
      };
      account_transactions: {
        Row: {
          id: string;
          account_id: string;
          amount: number;
          type: "debit" | "credit";
          description: string | null;
          transaction_date: string;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["account_transactions"]["Row"]> & {
          account_id: string;
          amount: number;
          type: "debit" | "credit";
        };
        Update: Partial<Database["public"]["Tables"]["account_transactions"]["Row"]>;
        Relationships: [];
      };
      invoices: {
        Row: {
          id: string;
          invoice_number: string;
          customer_id: string | null;
          total_amount: number;
          currency_id: string | null;
          status: StatusType;
          issue_date: string;
          due_date: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["invoices"]["Row"]> & {
          invoice_number: string;
          total_amount: number;
        };
        Update: Partial<Database["public"]["Tables"]["invoices"]["Row"]>;
        Relationships: [];
      };
      invoice_items: {
        Row: {
          id: string;
          invoice_id: string;
          description: string;
          quantity: number;
          unit_price: number;
          total: number;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["invoice_items"]["Row"]> & {
          invoice_id: string;
          description: string;
          quantity: number;
          unit_price: number;
        };
        Update: Partial<Database["public"]["Tables"]["invoice_items"]["Row"]>;
        Relationships: [];
      };
      cash_accounts: {
        Row: {
          id: string;
          name: string;
          currency_id: string | null;
          balance: number;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["cash_accounts"]["Row"]> & { name: string };
        Update: Partial<Database["public"]["Tables"]["cash_accounts"]["Row"]>;
        Relationships: [];
      };
      bank_accounts: {
        Row: {
          id: string;
          name: string;
          bank_name: string | null;
          account_number: string | null;
          currency_id: string | null;
          balance: number;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["bank_accounts"]["Row"]> & { name: string };
        Update: Partial<Database["public"]["Tables"]["bank_accounts"]["Row"]>;
        Relationships: [];
      };
      currencies: {
        Row: {
          id: string;
          code: string;
          name: string;
          symbol: string | null;
          is_base: boolean;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["currencies"]["Row"]> & { code: string; name: string };
        Update: Partial<Database["public"]["Tables"]["currencies"]["Row"]>;
        Relationships: [];
      };
      exchange_rates: {
        Row: {
          id: string;
          currency_id: string;
          rate: number;
          effective_date: string;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["exchange_rates"]["Row"]> & {
          currency_id: string;
          rate: number;
        };
        Update: Partial<Database["public"]["Tables"]["exchange_rates"]["Row"]>;
        Relationships: [];
      };
      profiles: {
        Row: {
          id: string;
          full_name: string | null;
          role: string | null;
          avatar_url: string | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["profiles"]["Row"]> & { id: string };
        Update: Partial<Database["public"]["Tables"]["profiles"]["Row"]>;
        Relationships: [];
      };
      settings: {
        Row: {
          id: string;
          key: string;
          value: Json;
          created_at: string;
          updated_at: string | null;
        };
        Insert: Partial<Database["public"]["Tables"]["settings"]["Row"]> & { key: string; value: Json };
        Update: Partial<Database["public"]["Tables"]["settings"]["Row"]>;
        Relationships: [];
      };
      audit_logs: {
        Row: {
          id: string;
          user_id: string | null;
          action: string;
          table_name: string | null;
          record_id: string | null;
          details: Json | null;
          created_at: string;
        };
        Insert: Partial<Database["public"]["Tables"]["audit_logs"]["Row"]> & { action: string };
        Update: Partial<Database["public"]["Tables"]["audit_logs"]["Row"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: Record<string, never>;
  };
}

export type Customer = Database["public"]["Tables"]["customers"]["Row"];
export type CustomerInsert = Database["public"]["Tables"]["customers"]["Insert"];
export type CustomerUpdate = Database["public"]["Tables"]["customers"]["Update"];
