import React from "react";
import GambarHKY from "@/assets/images/gereja-hky3.jpeg";

function ProfilParoki() {
  return (
    <div className="profil-paroki">
      <div className="content-profil">
        <h2 className="title">Profil Paroki Hati Kudus Yesus Tomohon</h2>
        <p>
          Nama Lengkap Paroki : Paroki Hati Kudus Yesus Tomohon
          <br /><br />
          Nama Pelindung : Hati Kudus Yesus
          <br /><br />
          Alamat Lengkap : Jl. Raya Tomohon, Kolongan, Kec. Tomohon Tengah, Kota Tomohon, Sulawesi Utara
          <br /><br />
          Telepon : (0431) 351 234
          <br /><br />
          Email : 2rGtj@example.com
          <br /><br />
          Tahun Berdiri : 1875
        </p>
      </div>
      <div className="image-profil">
        <img src={GambarHKY} alt="Profil Paroki Hati Kudus Yesus Tomohon" />
      </div>
    </div>
  );
}

export default ProfilParoki;