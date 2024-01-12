import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Header from './components/Header'
// import Banner from './components/Banner'
import Footer from './components/Footer'
import Home from './pages/Home/'
import Propos from './pages/Propos'
// import Location from './pages/Location'
import Error from './pages/Error'

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Accueil" element={<Home />} />
        <Route path="/propos" element={<Propos />} />
        {/* <Route path="/location" element={<Location />} /> */}
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
    {/* <Banner /> */}
    <Footer />
  </React.StrictMode>,
  document.getElementById('root')
)