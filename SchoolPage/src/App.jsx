import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./Pages/DefaultLayout"
import FAQPage from "./Pages/FAQPage.jsx";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<FAQPage />} />

        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App