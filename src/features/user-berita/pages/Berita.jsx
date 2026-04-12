import React from "react";
import FotoHKY from "@/assets/images/gereja-hky3.jpeg";

function Berita() {
  return (
    <div className="berita-page">
      <h2 className="berita-title">Berita Paroki</h2>
      <div className="berita-utama">
        <div className="berita-image">
          <img src={FotoHKY} alt="Foto HKY" />
        </div>
        <div className="berita-content">
          <div className="berita-header">
            <h3 className="berita-judul">Judul Berita Utama</h3>
            <p className="berita-tanggal">23 Februari 2026</p>
          </div>
          <p className="berita-deskripsi">
            Gereja Katolik Hati Kudus Yesus (HKY) Tomohon merupakan salah satu paroki Katolik tertua dan penting di wilayah Kota Tomohon, 
            Sulawesi Utara. Perkembangan Gereja Katolik di Tomohon tidak terlepas dari karya misi para imam dan biarawan yang datang ke wilayah 
            Minahasa pada akhir abad ke-19 hingga awal abad ke-20.
            <br /><br />
            Awal Misi Katolik di Minahasa. Pewartaan iman Katolik di wilayah Minahasa mulai berkembang melalui karya para misionaris yang 
            kemudian membentuk komunitas-komunitas umat di beberapa daerah, termasuk Tomohon.
            <br /><br />
            Pembentukan Paroki. Seiring bertambahnya jumlah umat Katolik di Tomohon dan sekitarnya, dibentuklah Paroki Hati Kudus Yesus Tomohon 
            sebagai pusat pelayanan rohani dan kegiatan pastoral umat.
            <br /><br />
            Perkembangan Fisik Gereja. Bangunan gereja mengalami beberapa tahap pembangunan dan renovasi untuk menyesuaikan dengan pertumbuhan 
            jumlah umat. Gereja ini kemudian menjadi salah satu pusat kegiatan keagamaan Katolik di Tomohon.
            <br /><br />
            Peran dalam Kehidupan Sosial. Selain sebagai tempat ibadah, paroki ini juga aktif dalam kegiatan sosial, pendidikan iman, dan 
            pelayanan masyarakat di Kota Tomohon.
            <br /><br />
            Saat ini, Paroki HKY Tomohon berada dalam wilayah Keuskupan Manado dan terus berkembang sebagai pusat pembinaan iman, kegiatan 
            kategorial, serta pelayanan pastoral bagi umat Katolik di Tomohon dan sekitarnya.
          </p>
        </div>
      </div>

      <div className="yellow-line-bold"></div>

      <div className="berita-lain">
        <h3 className="berita-lain-title">Berita Lainnya</h3>
        <ul className="berita-lain-list">
          <li className="berita-lain-item">Berita 1: Kegiatan Sosial Paroki HKY Tomohon</li>
          <li className="berita-lain-item">Berita 2: Perayaan Hari Raya di Paroki HKY Tomohon</li>
          <li className="berita-lain-item">Berita 3: Program Pendidikan Iman di Paroki HKY Tomohon</li>
        </ul>
        
      </div>
      {/* Konten berita akan ditempatkan di sini */}
    </div>
  );
}

export default Berita;