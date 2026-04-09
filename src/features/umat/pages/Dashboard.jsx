import React from "react";
import GambarPastor from "../../../assets/images/foto-pastor.png";
import SabdaKehidupanSection from "../components/SabdaKehidupanSection";

function Dashboard() {
  return (
    <div>
      <div className="hero-section">
        <div className="overlay"></div>

        <div className="content">
          <SabdaKehidupanSection />

          <div className="image">
            <img src={GambarPastor} alt="Foto Pastor" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Dashboard;