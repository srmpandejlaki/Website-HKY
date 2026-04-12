import React from "react";
import GambarPastor from "../../../assets/images/foto-pastor.png";
import SabdaKehidupanSection from "../components/SabdaKehidupanSection";
import Jadwal from "../components/Jadwal";
import InfoParoki from "../components/InfoParoki";

function Dashboard() {
  return (
    <div className="main-section">
      <div className="hero-section">
        <div className="overlay"></div>

        <div className="content">
          <SabdaKehidupanSection />

          <div className="image">
            <img src={GambarPastor} alt="Foto Pastor" />
          </div>
        </div>
      </div>
      <div className="information">
        <Jadwal />
        <InfoParoki />
      </div>
    </div>
  );
}

export default Dashboard;