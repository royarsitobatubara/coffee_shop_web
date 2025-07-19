import { BrowserRouter, Routes, Route } from "react-router-dom"
import HomePage from "../pages/HomePage"

function AppRouter() {
  return (
    <BrowserRouter basename="/coffee/">
        <Routes>
            <Route path="/" element={<HomePage />} />
        </Routes>
    </BrowserRouter>
  )
}

export default AppRouter