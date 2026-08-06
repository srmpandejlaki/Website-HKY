// Penjelasan: Client Component karena mengimport Navigation yang client component.
"use client";

import Image from "next/image";
import Navigation from "./Navigation";

/**
 * Komponen Header untuk bagian atas website.
 *
 * Perbedaan dari versi React biasa:
 * - Menggunakan <Image> dari "next/image" untuk optimasi gambar otomatis
 *   (lazy loading, responsive, format modern seperti WebP)
 * - src gambar menggunakan path dari folder /public (tanpa kata "public")
 * - width & height WAJIB diisi untuk optimasi (atau gunakan fill)
 */
export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image
          className="logo-hky"
          src="/images/logo-hky-tomohon.png"
          alt="Logo HKY Tomohon"
          width={50}
          height={50}
        />
        <h4>
          Paroki Hati Kudus Yesus <br /> Tomohon
        </h4>
      </div>
      <Navigation />
    </header>
  );
}
