import {
  LayoutDashboard,
  Users,
  Building2,
  Package,
  CalendarCheck,
  ShoppingCart,
  ShoppingBag,
  Wallet,
  Banknote,
  Receipt,
  Calculator,
  FileText,
  FileSpreadsheet,
  BarChart3,
  Landmark,
  Settings,
  ShieldCheck,
  type LucideIcon,
} from "lucide-react";

export interface NavItem {
  title: string;
  href: string;
  icon: LucideIcon;
}

export interface NavGroup {
  title: string;
  items: NavItem[];
}

export const navGroups: NavGroup[] = [
  {
    title: "الرئيسية",
    items: [{ title: "لوحة التحكم", href: "/dashboard", icon: LayoutDashboard }],
  },
  {
    title: "العمليات",
    items: [
      { title: "العملاء", href: "/clients", icon: Users },
      { title: "الموردون", href: "/suppliers", icon: Building2 },
      { title: "الخدمات", href: "/services", icon: Package },
      { title: "الحجوزات", href: "/bookings", icon: CalendarCheck },
    ],
  },
  {
    title: "المبيعات والمشتريات",
    items: [
      { title: "المبيعات", href: "/sales", icon: ShoppingCart },
      { title: "المشتريات", href: "/purchases", icon: ShoppingBag },
      { title: "الفواتير", href: "/invoices", icon: FileSpreadsheet },
    ],
  },
  {
    title: "المالية والمحاسبة",
    items: [
      { title: "دفعات العملاء", href: "/client-payments", icon: Wallet },
      { title: "دفعات الموردين", href: "/supplier-payments", icon: Banknote },
      { title: "المصروفات", href: "/expenses", icon: Receipt },
      { title: "الصندوق والبنك", href: "/treasury", icon: Landmark },
      { title: "الحسابات", href: "/accounts", icon: Calculator },
      { title: "كشف الحساب", href: "/account-statement", icon: FileText },
      { title: "التقارير", href: "/reports", icon: BarChart3 },
    ],
  },
  {
    title: "النظام",
    items: [
      { title: "المستخدمون والصلاحيات", href: "/users", icon: ShieldCheck },
      { title: "الإعدادات", href: "/settings", icon: Settings },
    ],
  },
];
