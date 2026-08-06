"use client";

import Image from "next/image";
import Navigation from "./Navigation";

export default function Header() {
  return (
    <header className="header">
      <div className="logo">
        <Image
          className="logo-hky"
          src="/images/logo-hky-tomohon.png"
          alt="Logo HKY Tomohon"
          width={50}
          height={50}
        />
        <h4>
          Paroki Hati Kudus Yesus <br /> Tomohon
        </h4>
      </div>
      <Navigation />
    </header>
  );
}
