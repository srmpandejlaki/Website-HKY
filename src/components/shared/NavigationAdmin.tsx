"use client";

import { usePathname } from "next/navigation";
export default function NavigationAdmin() {
  const pathname = usePathname();

  return (
    <nav className="navigation-admin">
      <ul>
        <li>
          <a href="/dashboard-admin" className={pathname === "/dashboard-admin" ? "active" : ""}><i className="fa-solid fa-house"></i>BERANDA</a>
        </li>
        <li>
          <a href="/jadwal" className={pathname === "/jadwal" ? "active" : ""}><i className="fa-solid fa-calendar"></i>JADWAL & INFO PAROKI</a>
        </li>
        <li>
          <a href="/profil-dpp" className={pathname === "/profil-dpp" ? "active" : ""}><i className="fa-solid fa-user"></i>PROFIL DPP PAROKI</a>
        </li>
        <li>
          <a href="/data-statistik" className={pathname === "/data-statistik" ? "active" : ""}><i className="fa-solid fa-chart-bar"></i>DATA STATISTIK UMAT</a>
        </li>
        <li>
          <a href="/peta-umat" className={pathname === "/peta-umat" ? "active" : ""}><i className="fa-solid fa-map-marker-alt"></i>PETA UMAT PAROKI</a>
        </li>
        <li>
          <a href="/berita-sabda" className={pathname === "/berita-sabda" ? "active" : ""}><i className="fa-solid fa-newspaper"></i>BERITA & <br />SABDA KEHIDUPAN</a>
        </li>
        <li>
          <a href="/settings" className={pathname === "/settings" ? "active" : ""}><i className="fa-solid fa-cog"></i>PENGATURAN</a>
        </li>
      </ul>
    </nav>
  );
}