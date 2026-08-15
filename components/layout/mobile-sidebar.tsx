"use client";

import { useState } from "react";
import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTitle } from "@/components/ui/sheet";
import { BrandMark } from "@/components/layout/brand-mark";
import { SidebarNav } from "@/components/layout/sidebar-nav";

export function MobileSidebar() {
  const [open, setOpen] = useState(false);

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <Button
        variant="ghost"
        size="icon"
        className="lg:hidden"
        onClick={() => setOpen(true)}
        aria-label="فتح القائمة"
      >
        <Menu className="h-5 w-5" />
      </Button>
      <SheetContent side="right" className="w-72 bg-primary-900 p-0 text-white">
        <SheetTitle className="sr-only">القائمة الرئيسية</SheetTitle>
        <div className="flex items-center gap-3 px-5 py-6">
          <BrandMark />
          <div>
            <p className="font-display text-base font-extrabold text-white">الهرم ترافيل</p>
            <p className="text-[11px] text-primary-200/70">نظام الإدارة والمحاسبة</p>
          </div>
        </div>
        <div className="max-h-[calc(100vh-6rem)] overflow-y-auto pb-6">
          <SidebarNav onNavigate={() => setOpen(false)} />
        </div>
      </SheetContent>
    </Sheet>
  );
}
