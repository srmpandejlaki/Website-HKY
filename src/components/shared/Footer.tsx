import Image from "next/image";

/**
 * Komponen Footer untuk bagian bawah website.
 *
 * Catatan:
 * - Ini adalah Server Component (tidak ada "use client")
 * - Server Component lebih ringan karena tidak mengirim JavaScript ke browser
 * - Cocok untuk komponen yang hanya menampilkan konten statis (tidak interaktif)
 */
export default function Footer() {
  return (
    <footer className="footer">
      <div className="logo">
        <Image
          src="/images/logo-hky-tomohon.png"
          alt="Logo HKY"
          className="logo-hky"
          width={60}
          height={60}
        />
        <h4>
          Paroki Hati Kudus Yesus <br /> Tomohon
        </h4>
      </div>
      <div className="middle-footer">
        <div className="contacts">
          <p>
            Jl. Raya Tomohon, Kolongan, Kec. Tomohon Tengah, Kota Tomohon,
            Sulawesi Utara
          </p>
          <p>Kode Pos: 99111</p>
          <p>Tel: (0431) 123456</p>
          <p>Email: info_hky.tomohon@go.id</p>
        </div>
        <div className="social-media">
          <p>Follow us on:</p>
          <p className="lists">
            <a
              href="https://www.facebook.com/hky.tomohon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Facebook
            </a>
          </p>
          <p className="lists">
            <a
              href="https://www.instagram.com/hky.tomohon"
              target="_blank"
              rel="noopener noreferrer"
            >
              Instagram
            </a>
          </p>
          <p className="lists">
            <a
              href="https://www.youtube.com/hky.tomohon"
              target="_blank"
              rel="noopener noreferrer"
            >
              YouTube
            </a>
          </p>
        </div>
      </div>
      <div className="yellow-line"></div>
      <div className="copyright">
        <p>&copy; 2026 Komsos HKY Tomohon</p>
      </div>
    </footer>
  );
}
