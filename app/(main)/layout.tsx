import { Sidebar } from "@/components/layout/sidebar";
import { Header } from "@/components/layout/header";

export default function MainLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen bg-background">
      <Sidebar />
      <div className="lg:pr-72">
        <Header />
        <main className="pattern-bg px-4 py-6 sm:px-6 lg:py-8">{children}</main>
      </div>
    </div>
  );
}
