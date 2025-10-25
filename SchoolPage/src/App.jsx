import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./Pages/DefaultLayout"
import HomePage from "./Pages/HomePage"
import HoatDong from "./Pages/HoatDong"
import StudentStatus from "./Pages/StudentStatus"
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="hoat-dong" element={<HoatDong />} />
          <Route path="student" element={<StudentStatus />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App