import React from "react";

function Jadwal() {
  return (
    <div className="jadwal-section">
      <h2 className="title">Jadwal</h2>

      <div className="jadwal-list">
        <div className="jadwal-item">
          <h3>Misa Harian</h3>
          <div className="waktu">
            <p>05.30 WITA</p>
          </div>
        </div>
        <div className="jadwal-item">
          <h3>Misa Minggu</h3>
          <div className="waktu">
            <p>06.30 WITA</p>
            <p>08.30 WITA</p>
            <p>17.30 WITA</p>
          </div>
        </div>
        <div className="jadwal-item">
          <h3>Adorasi Ekaristi - Jumat</h3>
          <div className="waktu">
            <p>19.00 WITA</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Jadwal;