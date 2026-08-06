import Image from "next/image";

/**
 * Komponen ProfilParoki
 * Menampilkan informasi profil paroki (nama, alamat, tahun berdiri, dll).
 */
export default function ProfilParoki() {
  return (
    <div className="profil-paroki">
      <div className="content-profil">
        <h2 className="title">Profil Paroki Hati Kudus Yesus Tomohon</h2>
        <p>
          Nama Lengkap Paroki : Paroki Hati Kudus Yesus Tomohon
          <br />
          <br />
          Nama Pelindung : Hati Kudus Yesus
          <br />
          <br />
          Alamat Lengkap : Jl. Raya Tomohon, Kolongan, Kec. Tomohon Tengah,
          Kota Tomohon, Sulawesi Utara
          <br />
          <br />
          Telepon : (0431) 351 234
          <br />
          <br />
          Email : 2rGtj@example.com
          <br />
          <br />
          Tahun Berdiri : 1875
        </p>
      </div>
      <div className="image-profil">
        <Image
          src="/images/gereja-hky3.jpeg"
          alt="Profil Paroki Hati Kudus Yesus Tomohon"
          width={500}
          height={300}
          style={{ objectFit: "cover", width: "100%", height: "100%" }}
        />
      </div>
    </div>
  );
}
