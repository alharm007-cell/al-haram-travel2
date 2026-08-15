import { Bell, Search } from "lucide-react";
import { MobileSidebar } from "@/components/layout/mobile-sidebar";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export function Header() {
  return (
    <header className="sticky top-0 z-20 flex h-16 items-center gap-3 border-b border-border bg-background/90 px-4 backdrop-blur sm:px-6">
      <MobileSidebar />

      <div className="relative hidden max-w-sm flex-1 sm:block">
        <Search className="pointer-events-none absolute right-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
        <Input placeholder="بحث سريع عن عميل، حجز، فاتورة..." className="pr-9" />
      </div>

      <div className="mr-auto flex items-center gap-2">
        <Button variant="ghost" size="icon" aria-label="الإشعارات">
          <Bell className="h-5 w-5" />
        </Button>

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <button className="flex items-center gap-2 rounded-lg p-1.5 pl-2 hover:bg-secondary">
              <Avatar className="h-8 w-8">
                <AvatarFallback className="text-xs">؟</AvatarFallback>
              </Avatar>
              <span className="hidden text-sm font-medium sm:inline">بانتظار تسجيل الدخول</span>
            </button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="start" className="w-56">
            <DropdownMenuLabel>الحساب</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <DropdownMenuItem asChild>
              <a href="/settings">الإعدادات</a>
            </DropdownMenuItem>
            <DropdownMenuItem asChild>
              <a href="/login">تسجيل الدخول</a>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </header>
  );
}
