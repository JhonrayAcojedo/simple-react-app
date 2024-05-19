import React, { useState } from 'react'
import Layout from './layouts/layout'
import Landing from './components/landing/index'
import Library from './components/library'
import Details from './components/details'

import { BrowserRouter as Router, createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'

const App = () => {

  const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<Layout/>}>
      <Route index element={<Landing/>}/>
      <Route path='/library' element={<Library/>}/>
      <Route path='/library/:id' element={<Details/>}/>
    </Route>)
  )
  return (
    <RouterProvider router={router} />
  )
}

export default App