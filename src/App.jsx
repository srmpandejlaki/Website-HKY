import { Route, Routes, Navigate } from "react-router-dom";
import MainLayout from "./shared/layouts/MainLayout/MainLayout";
import DashboardUmat from "./features/umat/pages/Dashboard";

function App() {

  return (
    <main>
      <Routes>
        <Route path="/" element={<MainLayout />}>
          <Route index element={<Navigate to="dashboard" />} />
          <Route path="dashboard" element={<DashboardUmat />} />
        </Route>
      </Routes>
    </main>
  )
}

export default App
