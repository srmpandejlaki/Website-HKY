import React from "react";

function Navigation() {
  return (
    <nav>
      <ul className="navigation">
        <li className="nav-links"><a href="/">Beranda</a></li>
        <li className="nav-links"><a href="/about">Profil & Sejarah</a></li>
        <li className="nav-links"><a href="/articles">Artikel</a></li>
        <li className="nav-links"><a href="/contact">Kontak</a></li>
      </ul>
    </nav>
  );
}

export default Navigation;