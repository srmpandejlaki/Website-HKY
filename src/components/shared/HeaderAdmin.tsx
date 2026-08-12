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
      <section className="user">
        <div className="user-profile">
          <i className="fa-solid fa-circle-user"></i>
          <div className="user-info">
            <p className="user-name">John Doe</p>
            <p className="user-role">Admin</p>
          </div>
        </div>
        <div className="logout-btn">
          <a href="/login">
            <i className="fa-solid fa-sign-out-alt"></i> Logout
          </a>
        </div>
      </section>
    </header>
  );
}
