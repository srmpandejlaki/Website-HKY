import Image from "next/image";
import TemplateSubBerita from "@/components/berita/TemplateSubBerita";

import styles from "@/styles/berita.module.scss";

export default function BeritaPage() {
  return (
    <div className={styles["berita-page"]}>
      <h2 className={styles["berita-title"]}>Berita Paroki</h2>
      <div className={styles["berita-utama"]}>
        <div className={styles["berita-image"]}>
          <Image
            src="/images/gereja-hky3.jpeg"
            alt="Foto HKY"
            width={400}
            height={400}
            style={{ objectFit: "cover", borderRadius: "0.5rem" }}
          />
        </div>
        <div className={styles["berita-content"]}>
          <div className={styles["berita-header"]}>
            <h3 className={styles["berita-judul"]}>Judul Berita Utama</h3>
            <p className={styles["berita-tanggal"]}>23 Februari 2026</p>
          </div>
          <p className={styles["berita-deskripsi"]}>
            Gereja Katolik Hati Kudus Yesus (HKY) Tomohon merupakan salah satu
            paroki Katolik tertua dan penting di wilayah Kota Tomohon, Sulawesi
            Utara. Perkembangan Gereja Katolik di Tomohon tidak terlepas dari
            karya misi para imam dan biarawan yang datang ke wilayah Minahasa
            pada akhir abad ke-19 hingga awal abad ke-20.
            <br />
            <br />
            Awal Misi Katolik di Minahasa. Pewartaan iman Katolik di wilayah
            Minahasa mulai berkembang melalui karya para misionaris yang kemudian
            membentuk komunitas-komunitas umat di beberapa daerah, termasuk
            Tomohon.
            <br />
            <br />
            Pembentukan Paroki. Seiring bertambahnya jumlah umat Katolik di
            Tomohon dan sekitarnya, dibentuklah Paroki Hati Kudus Yesus Tomohon
            sebagai pusat pelayanan rohani dan kegiatan pastoral umat.
            <br />
            <br />
            Perkembangan Fisik Gereja. Bangunan gereja mengalami beberapa tahap
            pembangunan dan renovasi untuk menyesuaikan dengan pertumbuhan
            jumlah umat. Gereja ini kemudian menjadi salah satu pusat kegiatan
            keagamaan Katolik di Tomohon.
            <br />
            <br />
            Peran dalam Kehidupan Sosial. Selain sebagai tempat ibadah, paroki
            ini juga aktif dalam kegiatan sosial, pendidikan iman, dan pelayanan
            masyarakat di Kota Tomohon.
            <br />
            <br />
            Saat ini, Paroki HKY Tomohon berada dalam wilayah Keuskupan Manado
            dan terus berkembang sebagai pusat pembinaan iman, kegiatan
            kategorial, serta pelayanan pastoral bagi umat Katolik di Tomohon
            dan sekitarnya.
          </p>
        </div>
      </div>

      <div className="yellowLineBold"></div>

      <div className={styles["sub-berita"]}>
        <h2 className={styles["sub-berita-title"]}>Berita Lainnya</h2>

        <div className={styles["sub-berita-section"]}>
          <TemplateSubBerita />
          <TemplateSubBerita />
          <TemplateSubBerita />
        </div>
      </div>
    </div>
  );
}
