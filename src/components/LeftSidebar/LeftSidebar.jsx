import React from 'react'
import './LeftSidebar.css'
import { NavLink } from 'react-router-dom'

// import Globe from '../../assets/Globe.svg'
import {BsGlobeAmericas} from 'react-icons/bs'
const LeftSidebar = () => {
  return (
    <div className='left-sidebar'>
      <nav className='side-nav'>
        <NavLink to='/Home ' className='side-nav-links' activeClass='active'>
          <p>Home</p>
        </NavLink>
        <div className='side-nav-div'>
          <div><p>PUBLIC</p></div>
          <NavLink to="/Questions" className='side-nav-links' activeClassName='active'>
            <BsGlobeAmericas/>
            <p style={{paddingLeft: '20px'}}>Questions</p>
          </NavLink>
          <NavLink to='/Tags' className='side-nav-links' style={{paddingLeft: "40px"}}>
            <p>Tags</p>
          </NavLink>
          <NavLink to='/Tags' className="side-nav-links" style={{paddingLeft : "40px"}}>
            <p>User</p>
          </NavLink>
        </div>
      </nav>
    </div>
  )
}

export default LeftSidebar