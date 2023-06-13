import React from 'react'
import logo from '../../assets/logo.svg'
import { Link } from 'react-router-dom'
import './Navbar.css'
import { FaSearch } from 'react-icons/fa'
import Button from '../../components/Button/Button'
import Avatar from '../Avavtar/Avatar'

const Navbar = () => {

  const User = null

  return (
    <nav className='main-nav'>
      <div className='navbar'>

        <Link to='/' className='nav-item logo'>
          <img src={logo} alt="logo" className='logo' />
        </Link>
        <Link to='/' className='nav-item nav-btn'>About</Link>
        <Link to='/' className='nav-item nav-btn'>Product</Link>
        <Link to='/' className='nav-item nav-btn'>For Teams</Link>

        <form action="">
          <input type="text" placeholder='Search' />
          <FaSearch className='icon'/>
        </form>
        {
          User === null ?
            <Link to='/Auth' className='nav-item nav-links'>Log in</Link> :
            <>
              <Link to='/User' style={{color : "White" , textDecoration : "none"}}  className='nav-items'>
                <Avatar backgroundColor={'#009dff'} borderRadius="50%" px="10px" py ="7px" >M</Avatar>
              </Link>
              <Button className="nav-btn">Log out</Button>
            </>
        }
      </div>
    </nav>
  )
}

export default Navbar