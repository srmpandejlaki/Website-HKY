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
      <div className="content">
        <section className="sidebar">
          <h4 className="title">MENU</h4>
          <Navigation />
          <div className="overlay"></div>
        </section>
        {children}
      </div>
      <Footer />
    </>
  );
}
