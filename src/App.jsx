import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout/MainLayout";
import DashboardUmat from "./features/user-dashboard/pages/Dashboard";
import ProfilSejarah from "./features/user-sejarah-visimisi/pages/ProfilSejarah";
import Berita from "./features/user-berita/pages/Berita";
import SabdaKehidupan from "./features/user-sabda-kehidupan/pages/SabdaKehidupan";
import Contact from "./features/user-contact/pages/Contact";

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardUmat />} />
          <Route path="profil-sejarah" element={<ProfilSejarah />} />
          <Route path="berita" element={<Berita />} />
          <Route path="sabda-kehidupan" element={<SabdaKehidupan />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
