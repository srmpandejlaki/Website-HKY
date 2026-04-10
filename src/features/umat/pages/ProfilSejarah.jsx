import React from "react";
import ProfilParoki from "../components/profil&sejarah/ProfilParoki";
import SejarahParoki from "../components/profil&sejarah/SejarahParoki";

function ProfilSejarah() {
  return (
    <div className="profilsejarah-section">
      <ProfilParoki />
      
      <div className="yellow-line"></div>

      <SejarahParoki />
    </div>
  );  
}

export default ProfilSejarah;