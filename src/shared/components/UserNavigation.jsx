import React from "react";

function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li className="nav-links"><a href="/"><i className="fa-solid fa-house"></i> Beranda</a></li>
        <li className="nav-links"><a href="/profil-sejarah"><i className="fa-solid fa-info-circle"></i> Profil & Sejarah</a></li>
        <li className="nav-links"><a href="/sabda-kehidupan"><i className="fa-solid fa-newspaper"></i> Artikel</a></li>
        <li className="nav-links"><a href="/contact"><i className="fa-solid fa-phone"></i> Kontak</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;