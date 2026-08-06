import Image from "next/image";
import SabdaKehidupanSection from "@/components/dashboard/SabdaKehidupanSection";
import Jadwal from "@/components/dashboard/Jadwal";
import InfoParoki from "@/components/dashboard/InfoParoki";
import styles from "@/styles/dashboard.module.scss";

/**
 * Halaman Dashboard (/dashboard)
 *
 * Penjelasan file-based routing:
 * - File ini terletak di: app/(main)/dashboard/page.tsx
 * - Next.js otomatis membuat route /dashboard dari struktur folder
 * - Tidak perlu mendefinisikan <Route path="dashboard" .../> seperti di React Router
 *
 * Penjelasan next/image:
 * - <Image> menggantikan <img> biasa
 * - Memberikan optimasi otomatis: lazy loading, responsive sizes, format modern
 * - Property width & height WAJIB (atau gunakan fill + container relative)
 */
export default function DashboardPage() {
  return (
    <section className={styles.mainSection}>
      <div className={styles.heroSection}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <SabdaKehidupanSection />

          <div className={styles.image}>
            <Image
              src="/images/foto-pastor.png"
              alt="Foto Pastor"
              width={300}
              height={550}
              style={{ objectFit: "contain", height: "100%", width: "auto" }}
              priority
            />
          </div>
        </div>
      </div>
      <div className={styles.information}>
        <Jadwal />
        <InfoParoki />
      </div>
    </section>
  );
}
