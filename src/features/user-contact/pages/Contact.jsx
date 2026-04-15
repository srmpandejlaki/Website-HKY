import React from "react";

function Contact() {
  return (
    <div className="contact-section">
      <h2 className="contact-title">Contact Us</h2>
      <div className="contact-main">
        <div className="map-container">
          <a 
            href="https://maps.app.goo.gl/R1XL7atKxPSA8PTw6"
            target="_blank"
            rel="noopener noreferrer"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3988.7573815870373!2d124.83552347394506!3d1.3213438616689444!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x32876c97b0aabd3d%3A0xdcbb9ba076f221d2!2sGereja%20Katolik%20Paroki%20Hati%20Kudus%20Yesus%2C%20Tomohon%20-%20Kolongan!5e0!3m2!1sid!2sid!4v1776263565686!5m2!1sid!2sid"
              width="100%"
              height="250"
              style={{ border: 0 }}
              loading="lazy"
            ></iframe>
          </a>
        </div>
        <div className="contact-number">
          <p>HUBUNGI KAMI MELALUI</p>
          <ul>
            <li>Email: info_hky.tomohon@go.id</li>
            <li>Phone: (0431) 123-456</li>
            <li>Address: Jl. Raya Tomohon, Kolongan, Kec. Tomohon Tengah, Kota Tomohon, Sulawesi Utara</li>
          </ul>
        </div>
        <div className="contact-medsos">
          <p>IKUTI AKUN SOSIAL MEDIA KAMI</p>
          <ul>
            <li><a href="https://www.facebook.com/parokihatiKudusYesus" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://www.instagram.com/parokihatiKudusYesus" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Contact;