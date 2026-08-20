import Image from "next/image";
import SabdaKehidupanSection from "@/components/dashboard/SabdaKehidupanSection";
import Jadwal from "@/components/dashboard/Jadwal";
import InfoParoki from "@/components/dashboard/InfoParoki";
import styles from "@/styles/dashboard.module.scss";

export default function DashboardPage() {
  return (
    <section className="main-page">
      <div className={styles["hero-section"]}>
        <div className={styles.overlay}></div>

        <div className={styles.content}>
          <SabdaKehidupanSection />

          <div className={styles.image}>
            <Image
              src="/images/foto-pastor-2.png"
              alt="Foto Pastor"
              width={900}
              height={900}
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
