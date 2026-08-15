import type { LucideIcon } from "lucide-react";
import { Plus, Filter, Download } from "lucide-react";
import { PageHeader } from "@/components/shared/page-header";
import { EmptyState } from "@/components/shared/empty-state";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import {
  Table,
  TableHeader,
  TableRow,
  TableHead,
  TableBody,
  TableCell,
} from "@/components/ui/table";

interface ListPageTemplateProps {
  title: string;
  description: string;
  addLabel: string;
  searchPlaceholder: string;
  columns: string[];
  icon: LucideIcon;
  emptyTitle: string;
  emptyDescription: string;
}

/**
 * قالب موحّد لصفحات عرض البيانات (جدول + بحث + حالة فارغة).
 * لا يحتوي على بيانات وهمية — بمجرد ربط Supabase يتم استبدال هذا القالب
 * باستعلامات فعلية (Server Components + Supabase client) مع نفس شكل الواجهة.
 */
export function ListPageTemplate({
  title,
  description,
  addLabel,
  searchPlaceholder,
  columns,
  icon,
  emptyTitle,
  emptyDescription,
}: ListPageTemplateProps) {
  return (
    <div>
      <PageHeader
        title={title}
        description={description}
        action={
          <Button size="default" className="gap-2">
            <Plus className="h-4 w-4" />
            {addLabel}
          </Button>
        }
      />

      <Card className="p-4">
        <div className="mb-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
          <Input placeholder={searchPlaceholder} className="sm:max-w-xs" />
          <div className="flex items-center gap-2">
            <Button variant="outline" size="sm" className="gap-2">
              <Filter className="h-3.5 w-3.5" />
              فلترة
            </Button>
            <Button variant="outline" size="sm" className="gap-2">
              <Download className="h-3.5 w-3.5" />
              تصدير
            </Button>
          </div>
        </div>

        <div className="rounded-lg border border-border">
          <Table>
            <TableHeader>
              <TableRow>
                {columns.map((col) => (
                  <TableHead key={col}>{col}</TableHead>
                ))}
              </TableRow>
            </TableHeader>
            <TableBody>
              <TableRow className="hover:bg-transparent">
                <TableCell colSpan={columns.length} className="p-0">
                  <EmptyState
                    icon={icon}
                    title={emptyTitle}
                    description={emptyDescription}
                  />
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </div>
      </Card>
    </div>
  );
}
