import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./Pages/DefaultLayout"
import HomePage from "./Pages/HomePage"
import HoatDong from "./Pages/HoatDong"
import StudentStatus from "./Pages/StudentStatus"
import Schedule from "./Pages/Shedule.jsx";
import LichThi from "./Pages/LichThi.jsx";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="hoat-dong" element={<HoatDong />} />
          <Route path="student" element={<StudentStatus />} />
          <Route path="Shedule" element={<Schedule />} />
          <Route path="Exam" element={<LichThi />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App