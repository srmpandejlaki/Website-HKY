import styles from "@/styles/sabda-kehidupan.module.scss";

export default function TemplateSubSK() {
  return (
    <div className={styles["sub-sabda-kehidupan-item"]}>
      <div className={styles["sub-sabda-kehidupan-header"]}>
        <h3 className={styles["sub-sabda-kehidupan-judul"]}>Judul Berita Utama</h3>
        <p className={styles["sub-sabda-kehidupan-judul-injil"]}>
          Matius 4:10 (Mat 4:1-11)
        </p>
      </div>
      <p className={styles["sub-sabda-kehidupan-bold-deskripsi"]}>
        Maka berkatalah Yesus kepadanya: &quot;Enyahlah, Iblis! Sebab ada
        tertulis: Engkau harus menyembah Tuhan, Allahmu, dan hanya kepada Dia
        sajalah engkau berbakti!&quot;
      </p>
      <p className={styles["sub-sabda-kehidupan-deskripsi"]}>
        Bacaan Injil hari ini mengisahkan pencobaan Yesus oleh Iblis di padang
        gurun. Dalam keadaan yang sangat lapar sesudah berpuasa 40 hari, Yesus
        digoda untuk menggunakan kuasa dan kemampuan yang ada padaNya sebagai
        Putra Allah untuk memuaskan dorongan hawa nafsu dalam diriNya.
      </p>
      <div className={styles["sub-sabda-kehidupan-footer"]}>
        <a href="#" className={styles["sub-sabda-kehidupan-readmore"]}>
          Baca Selengkapnya
        </a>
        <p className={styles["sub-sabda-kehidupan-tanggal"]}>23 Februari 2026</p>
      </div>
    </div>
  );
}
