import type { Metadata } from "next";
import "@/styles/global.scss";
import "@/styles/navigation.scss";

export const metadata: Metadata = {
  title: "Paroki Hati Kudus Yesus Tomohon",
  description:
    "Website resmi Paroki Hati Kudus Yesus Tomohon - Keuskupan Manado",
  icons: {
    icon: "/images/logo-hky-tomohon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <head>
        {/* Font Awesome CDN — sama seperti yang ada di index.html frontend */}
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.7.2/css/all.min.css"
          integrity="sha512-Evv84Mr4kqVGRNSgIGL/F/aIDqQb7xQ2vcrdIwxfjThSH8CSR7PBEakCr51Ck+w+/U6swU2Im1vVX0SVk9ABhg=="
          crossOrigin="anonymous"
          referrerPolicy="no-referrer"
        />
      </head>
      <body>
        <main>{children}</main>
      </body>
    </html>
  );
}
