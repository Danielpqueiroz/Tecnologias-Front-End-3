import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav>
        <Link to="/" >Página Inicial </Link><br />
        <Link to="/a-faculdade" >AFaculdade </Link><br />
        <Link to="/lgpd" >Lgpd </Link><br />
        <Link to="/noticias" >Noticias </Link>
    </nav>
  )
}

export default Navbar