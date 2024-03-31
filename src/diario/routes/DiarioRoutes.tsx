import { Navigate, Route, Routes } from "react-router-dom"
import { DiarioPage } from "../pages/DiarioPage"

export const DiarioRoutes = () => {
  return (
    <Routes>

        <Route path="/" element={<DiarioPage />}/>

        {/* Si no se encuentra ninguna ruta, redirige a diario */}
        <Route path="/*" element={ <Navigate to="/" />}/>


    </Routes>

  )
}
