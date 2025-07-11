import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import Profile from './pages/Profile'
import MyWorksPage from './pages/MyWorks'
import CateringJobDetails from './pages/WorkDetails'
import Login from './pages/Login'

function App() {

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/my-works" element={<MyWorksPage />} />
        <Route path="/work-details" element={<CateringJobDetails />} />
        <Route path="/login" element={<Login />} />


      </Routes>
    </>
  )
}

export default App
