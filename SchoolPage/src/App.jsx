import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import DefaultLayout from "./Pages/DefaultLayout"
import HomePage from "./Pages/HomePage"

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