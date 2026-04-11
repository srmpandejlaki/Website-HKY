import React from "react";
import ProfilParoki from "../../components/profil&sejarah/ProfilParoki";
import SejarahParoki from "../../components/profil&sejarah/SejarahParoki";

function ProfilSejarah() {
  return (
    <div className="profilsejarah-section">
      <ProfilParoki />
      
      <div className="yellow-line-bold"></div>

      <SejarahParoki />
    </div>
  );  
}

export default ProfilSejarah;