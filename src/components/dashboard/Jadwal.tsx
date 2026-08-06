import styles from "@/styles/dashboard.module.scss";

export default function Jadwal() {
  return (
    <div className={styles["jadwal-section"]}>
      <h2 className={styles["title"]}>Jadwal</h2>

      <div className={styles["jadwal-list"]}>
        <div className={styles["jadwal-item"]}>
          <h3>Misa Harian</h3>
          <div className={styles["waktu"]}>
            <p>05.30 WITA</p>
          </div>
        </div>
        <div className={styles["jadwal-item"]}>
          <h3>Misa Minggu</h3>
          <div className={styles["waktu"]}>
            <p>06.30 WITA</p>
            <p>08.30 WITA</p>
            <p>17.30 WITA</p>
          </div>
        </div>
        <div className={styles["jadwal-item"]}>
          <h3>Adorasi Ekaristi - Jumat</h3>
          <div className={styles["waktu"]}>
            <p>19.00 WITA</p>
          </div>
        </div>
      </div>
    </div>
  );
}
