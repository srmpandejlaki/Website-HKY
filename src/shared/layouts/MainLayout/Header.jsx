import React from "react";
import LogoHKY from "../../../assets/images/logo-hky-tomohon.png";
import Navigation from "../../components/UserNavigation";

function Header() {
  return (
    <header className="header">
      <div className="logo">
        <img className="logo-hky" src={LogoHKY} alt="Logo HKY Tomohon" />
        <h4>Paroki Hati Kudus Yesus <br /> Tomohon</h4>
      </div>
      <Navigation />
    </header>
  );
}

export default Header;