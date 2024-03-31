import { Route, Routes } from "react-router-dom"
import { AuthRoutes } from "../auth/routes/AuthRoutes"
import { DiarioRoutes } from "../diario/routes/DiarioRoutes"

export const AppRouter = () => {
  return (
    <Routes>

        {/* Login y Registro */}
        <Route path="/auth/*" element={ <AuthRoutes /> } />

        {/* Diario App */}
        <Route path="/*" element={ <DiarioRoutes /> } />

    </Routes>

  )
}
