/**
 * Halaman Login (/login)
 *
 * Penjelasan:
 * - Halaman ini TIDAK menggunakan MainLayout (Header + Footer)
 * - Karena file ini berada di app/login/ (bukan di app/(main)/login/)
 * - Hanya menggunakan Root Layout (html + body)
 *
 * Ini menunjukkan keuntungan Route Group:
 * - Halaman di (main)/ → punya Header + Footer
 * - Halaman di luar (main)/ → TIDAK punya Header + Footer
 */
export default function LoginPage() {
  return (
    <div className="login-page">
      <h2>Login Page</h2>
      {/* Form login akan ditempatkan di sini */}
    </div>
  );
}
