import Image from "next/image";
import SabdaKehidupanSection from "@/components/dashboard/SabdaKehidupanSection";
import Jadwal from "@/components/dashboard/Jadwal";
import InfoParoki from "@/components/dashboard/InfoParoki";
import styles from "@/styles/dashboard.module.scss";

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
