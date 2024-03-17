import { Navigate, Route, Routes } from "react-router-dom"
import { Marvel, Dc } from "../heroes"

import { Navbar } from "../ui"
import { Login } from "../auth"

export const AppRouter = () => {
  return (
    <>
        <Navbar />
        <Routes>
            <Route path="marvel" element={<Marvel />} />
            <Route path="dc" element={<Dc />} />

            <Route path="login" element={<Login />} />

            <Route path="/" element={<Navigate to="/marvel" />} />

            
        </Routes>
    </>
  )
}
