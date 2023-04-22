import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { About } from '../Pages/About'
import { BlogPage } from '../Pages/BlogPage'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/blogs" element={<BlogPage />} ></Route>
    </Routes>
  )
}

export default AllRoutes
