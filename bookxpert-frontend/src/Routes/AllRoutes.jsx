import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { HomePage } from '../Pages/HomePage'
import { About } from '../Pages/About'
import { BlogPage } from '../Pages/BlogPage'
import { Contact } from '../Pages/Contact'
import { Service } from '../Pages/Service'

const AllRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} ></Route>
      <Route path="/about" element={<About />} ></Route>
      <Route path="/blogs" element={<BlogPage />} ></Route>
      <Route path="/contact" element={<Contact />} ></Route>
      <Route path="/services" element={<Service />} ></Route>

    </Routes>
  )
}

export default AllRoutes
