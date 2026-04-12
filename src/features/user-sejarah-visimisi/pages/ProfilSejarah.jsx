import React from "react";
import ProfilParoki from "../components/ProfilParoki";
import SejarahParoki from "../components/SejarahParoki";

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