import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Homepage from '../pages/Homepage'

export default function routers() {
  return (
    <BrowserRouter>
       <Routes>
          <Route path="/" element={<Homepage />} />
       </Routes>
    </BrowserRouter>
  )
}
