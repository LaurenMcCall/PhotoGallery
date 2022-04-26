import React from 'react'
import { Route, Routes } from 'react-router'
import { Home } from './pages/Home'
import { Link } from 'react-router-dom'
import { Pandas } from './pages/Pandas'

export function App() {
  return (
    <div>
      <header>
        <Link to="/">
          <h1>Things I like</h1>
        </Link>
        <h3>A Photo Gallery by Lauren McCall</h3>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="Pandas" element={<Pandas />}></Route>
        </Routes>
      </main>
    </div>
  )
}
