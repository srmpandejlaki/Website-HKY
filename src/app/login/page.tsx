import styles from "@/styles/login.module.scss";
import Link from "next/link";

export default function LoginPage() {
  return (
    <div className={styles["login-page"]}>
      <section className={styles["login-page-section"]}>
        <h2 className={styles["login-title"]}>Login Sebagai Admin</h2>
        <form className={styles["login-form"]}>
          {/* <div className={styles["login-form-group"]}>
            <label htmlFor="username">Username:</label>
            <input type="text" id="username" name="username" required />
          </div>

          <div className={styles["login-form-group"]}>
            <label htmlFor="password">Password:</label>
            <input type="password" id="password" name="password" required />
          </div> */}

          <button type="submit" className={styles["login-button"]}> <Link href="/dashboard-admin">Login</Link> </button>
        </form>
        <div className={styles["back-link"]}>
          <Link href="/">kembali ke beranda</Link>
        </div>
      </section>
    </div>
  );
}
