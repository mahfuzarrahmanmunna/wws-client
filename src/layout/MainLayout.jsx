import React from 'react'
import Header from '../component/Header'
import { Outlet } from 'react-router-dom'
import Footer from '../component/Footer'
import Nav from '../component/Nav'

const MainLayout = () => {
  return (
    <div>

        <div>
          <Nav></Nav>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>





    </div>
  )
}

export default MainLayout