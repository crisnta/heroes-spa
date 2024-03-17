import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../../ui'
import { Dc, Heroes, Marvel, Search } from '../pages'


export const HeroesRoutes = () => {
  return (
    <>
        <Navbar />

        <Routes>
            <Route path="marvel" element={<Marvel />} />
            <Route path="dc" element={<Dc />} />

            <Route path="search" element={<Search />} />
            <Route path="heroes" element={<Heroes />} />


        </Routes>

    </>
  )
}
