import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout/MainLayout";
import DashboardUmat from "./features/umat/pages/Dashboard";
import ProfilSejarah from "./features/umat/pages/ProfilSejarah";

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardUmat />} />
          <Route path="profil-sejarah" element={<ProfilSejarah />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
