import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./Pages/DefaultLayout"
import HomePage from "./Pages/HomePage"
import HoatDongPage from "./Pages/HoatDongPage"
import StudentStatus from "./Pages/StudentStatus"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="hoat-dong" element={<HoatDongPage />} />
          <Route path="student" element={<StudentStatus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App