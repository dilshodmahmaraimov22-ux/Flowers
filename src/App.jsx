import React from 'react'
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import Shop from './Pages/Shop/Shop'
import Blog from './Pages/Blog/Blog'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

const App = () => {
  return (
    <>
    <BrowserRouter>
                  <Routes>
                         <Route>
                               <Route path='/' element={<Home/>}/>
                               <Route path='/about' element={<Home/>}/>
                               <Route path='/shop' element={<Home/>}/>
                               <Route path='/blog' element={<Home/>}/>
                         </Route>
                  </Routes>
    </BrowserRouter>
    </>
  )
}

export default App