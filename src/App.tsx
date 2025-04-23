import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Search from './pages/Search'
import Contribute from './pages/Contribute'
export function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search' element={<Search />} />
          <Route path='/contribute' element={<Contribute />} />
        </Routes>
      </Layout>
    </Router>
  )
}
