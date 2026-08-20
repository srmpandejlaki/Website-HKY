import Header from "@/components/shared/HeaderAdmin";
import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/NavigationAdmin";

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Header />
      <div className="main">
        <section className="sidebar">
          <h4 className="title">MENU</h4>
          <Navigation />
          <div className="overlay"></div>
        </section>
        <section className="content">
          <div className="greeting">
            <h3>SELAMAT DATANG ADMIN</h3>
            <h4>Minggu, 22 Februari 2026</h4>
          </div>
          {children}
        </section>
      </div>
      <Footer />
    </>
  );
}
