import Image from "next/image";

/**
 * Komponen TemplateSubBerita
 * Template untuk menampilkan item berita di daftar "Berita Lainnya".
 *
 * Catatan tentang next/image:
 * - Gambar dari folder /public diakses tanpa prefix "public"
 * - width dan height harus ditentukan untuk optimasi
 * - Properti style={{ objectFit: "cover" }} menggantikan CSS object-fit
 */
export default function TemplateSubBerita() {
  return (
    <div className="sub-berita-item">
      <div className="sub-berita-image">
        <Image
          src="/images/gereja-hky3.jpeg"
          alt="Foto HKY"
          width={200}
          height={200}
          style={{ objectFit: "cover", height: "100%" }}
        />
      </div>
      <div className="sub-berita-content">
        <div className="sub-berita-header">
          <h3 className="sub-berita-judul">Judul Berita Utama</h3>
        </div>
        <p className="sub-berita-deskripsi">
          Gereja Katolik Hati Kudus Yesus (HKY) Tomohon merupakan salah satu
          paroki Katolik tertua dan penting di wilayah Kota Tomohon, Sulawesi
          Utara. Perkembangan Gereja Katolik di Tomohon tidak terlepas dari
          karya misi para imam dan biarawan yang datang ke wilayah Minahasa pada
          akhir abad ke-19 hingga awal abad ke-20.
        </p>
        <div className="sub-berita-footer">
          <a href="#" className="sub-berita-readmore">
            Baca Selengkapnya
          </a>
          <p className="sub-berita-tanggal">23 Februari 2026</p>
        </div>
      </div>
    </div>
  );
}
