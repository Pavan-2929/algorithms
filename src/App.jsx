import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Algo1 from './pages/Algo1'
import Header from './components/Header'
import Algo3 from './pages/Algo3'
import Algo2 from './pages/Algo2'
import Algo4 from './pages/Algo4'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <BrowserRouter>
      <Header/>
      <Routes>
        <Route path='/' element={<Algo1/>} />
        <Route path='/algo2' element={<Algo2/>} />
        <Route path='/algo3' element={<Algo3/>} />
        <Route path='/algo4' element={<Algo4/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
