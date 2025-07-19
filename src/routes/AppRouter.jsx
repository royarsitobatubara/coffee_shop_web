import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"
import ProtectedRouteAdmin from "../hooks/ProtectedRouteAdmin"
import AdminPage from "../pages/AdminPage"

function AppRouter() {
  return (
    <BrowserRouter basename="/coffee/">
        <Routes>
            <Route path="/" element={<HomePage />} />

            <Route path="/admin" element={<ProtectedRouteAdmin children={<AdminPage />} />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter