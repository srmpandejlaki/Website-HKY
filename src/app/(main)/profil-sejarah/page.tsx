import ProfilParoki from "@/components/sejarah/ProfilParoki";
import SejarahParoki from "@/components/sejarah/SejarahParoki";

/**
 * Halaman Profil & Sejarah (/profil-sejarah)
 *
 * Penjelasan:
 * - Nama folder "profil-sejarah" otomatis menjadi URL /profil-sejarah
 * - Komponen ProfilParoki dan SejarahParoki dipisah untuk modularitas
 */
export default function ProfilSejarahPage() {
  return (
    <div className="profilsejarah-section">
      <ProfilParoki />

      <div className="yellow-line-bold"></div>

      <SejarahParoki />
    </div>
  );
}
