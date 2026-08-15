import Link from "next/link";
import { BrandMark } from "@/components/layout/brand-mark";
import { SidebarNav } from "@/components/layout/sidebar-nav";

export function Sidebar() {
  return (
    <aside className="fixed inset-y-0 right-0 z-30 hidden w-72 flex-col bg-primary-900 lg:flex">
      <div className="flex items-center gap-3 px-5 py-6">
        <BrandMark />
        <div>
          <p className="font-display text-base font-extrabold text-white">الهرم ترافيل</p>
          <p className="text-[11px] text-primary-200/70">نظام الإدارة والمحاسبة</p>
        </div>
      </div>
      <div className="flex-1 overflow-y-auto pb-6">
        <SidebarNav />
      </div>
      <div className="border-t border-white/10 px-5 py-4">
        <Link
          href="/settings"
          className="block text-[11px] leading-relaxed text-primary-200/60 hover:text-primary-100"
        >
          الإصدار 1.0.0 — بانتظار ربط قاعدة البيانات
        </Link>
      </div>
    </aside>
  );
}
