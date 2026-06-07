import TopHeader from "@/components/layout/TopHeader";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";

export default function ClientLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <TopHeader />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
    </>
  );
}
