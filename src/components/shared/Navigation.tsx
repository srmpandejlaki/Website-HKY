// Penjelasan: Ini adalah "Client Component" karena menggunakan hooks (usePathname).
// Di Next.js, secara default semua komponen adalah Server Component.
// Kita perlu menambahkan "use client" di baris pertama jika komponen
// membutuhkan interaktivitas di browser (hooks, event handlers, dll).
"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navigation() {
  const pathname = usePathname();

  return (
    <nav>
      <ul className="navigation">
        <li className="nav-links">
          <Link href="/dashboard" className={pathname === "/dashboard" ? "active" : ""}>
            <i className="fa-solid fa-house"></i> Beranda
          </Link>
        </li>
        <li className="nav-links">
          <Link href="/profil-sejarah" className={pathname === "/profil-sejarah" ? "active" : ""}>
            <i className="fa-solid fa-info-circle"></i> Profil & Sejarah
          </Link>
        </li>
        <li className="nav-links">
          <Link href="/sabda-kehidupan" className={pathname === "/sabda-kehidupan" ? "active" : ""}>
            <i className="fa-solid fa-newspaper"></i> Artikel
          </Link>
        </li>
        <li className="nav-links">
          <Link href="/contact" className={pathname === "/contact" ? "active" : ""}>
            <i className="fa-solid fa-phone"></i> Kontak
          </Link>
        </li>
      </ul>
    </nav>
  );
}
