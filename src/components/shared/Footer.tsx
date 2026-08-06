import Image from "next/image";
import Link from "next/link";

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
      <div className="middleFooter">
        <div className="contacts">
          <p>
            Jl. Raya Tomohon, Kolongan, Kec. Tomohon Tengah, Kota Tomohon,
            Sulawesi Utara
          </p>
          <p>
            <span>Kode Pos</span>
            <span>: 99111</span>
          </p>
          <p>
            <span>Telp.</span>
            <span>: (0431) 123456</span>
          </p>
          <p>
            <span>Email</span>
            <span>: info_hky.tomohon@go.id</span>
          </p>
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
        <p>
          &copy; 2026 
          <Link href="/login"> Komsos HKY Tomohon</Link>
        </p>
      </div>
    </footer>
  );
}
