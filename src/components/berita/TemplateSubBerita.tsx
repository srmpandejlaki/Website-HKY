import Image from "next/image";

import styles from "@/styles/berita.module.scss";

export default function TemplateSubBerita() {
  return (
    <div className={styles["sub-berita-item"]}>
      <div className={styles["sub-berita-image"]}>
        <Image
          src="/images/gereja-hky3.jpeg"
          alt="Foto HKY"
          width={200}
          height={200}
          style={{ objectFit: "cover", height: "100%" }}
        />
      </div>
      <div className={styles["sub-berita-content"]}>
        <div className={styles["sub-berita-header"]}>
          <h3 className={styles["sub-berita-judul"]}>Judul Berita Utama</h3>
        </div>
        <p className={styles["sub-berita-deskripsi"]}>
          Gereja Katolik Hati Kudus Yesus (HKY) Tomohon merupakan salah satu
          paroki Katolik tertua dan penting di wilayah Kota Tomohon, Sulawesi
          Utara. Perkembangan Gereja Katolik di Tomohon tidak terlepas dari
          karya misi para imam dan biarawan yang datang ke wilayah Minahasa pada
          akhir abad ke-19 hingga awal abad ke-20.
        </p>
        <div className={styles["sub-berita-footer"]}>
          <a href="#" className={styles["sub-berita-readmore"]}>
            Baca Selengkapnya
          </a>
          <p className={styles["sub-berita-tanggal"]}>23 Februari 2026</p>
        </div>
      </div>
    </div>
  );
}
