"use client";

import Image from "next/image";

export default function HeaderAdmin() {
  return (
    <header className="header-admin">
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
    </header>
  );
}
