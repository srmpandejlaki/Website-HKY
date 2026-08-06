import { redirect } from "next/navigation";

/**
 * Halaman Root (/)
 *
 * Penjelasan:
 * - Di frontend Vite, ada: <Route index element={<Navigate to="dashboard" />} />
 * - Di Next.js, kita gunakan redirect() dari "next/navigation"
 * - redirect() langsung mengalihkan user ke /dashboard
 * - Ini adalah Server Component, redirect terjadi di server (bukan di browser)
 */
export default function HomePage() {
  redirect("/dashboard");
}
