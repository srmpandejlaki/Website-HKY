import ProfilParoki from "@/components/sejarah/ProfilParoki";
import SejarahParoki from "@/components/sejarah/SejarahParoki";

import styles from "@/styles/profil-sejarah.module.scss";

export default function ProfilSejarahPage() {
  return (
    <div className={styles["profilsejarah-section"]}>
      <ProfilParoki />

      <div className="yellowLineBold"></div>

      <SejarahParoki />
    </div>
  );
}
