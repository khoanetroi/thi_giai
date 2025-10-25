import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./Pages/DefaultLayout"
import HomePage from "./Pages/HomePage"
import AboutPage from './Pages/Layout/about'
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route index path="about" element={<AboutPage />} />
        </Route>
        
      </Routes>
    </BrowserRouter>
  )
}

export default App