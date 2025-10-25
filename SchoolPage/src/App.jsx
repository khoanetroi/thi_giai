import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./Pages/DefaultLayout"
import HomePage from "./Pages/HomePage"
import HoatDong from "./Pages/HoatDong"
import StudentStatus from "./Pages/StudentStatus"
import FAQPage from "./Pages/FAQPage"
import InformationFull from "./Pages/InformationFull"
import Schedule from "./Pages/Shedule.jsx";
import LichThi from "./Pages/LichThi.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App