import React from 'react'
import {Link} from 'react-router-dom'
const Navbar = () => {
  return <>
    <nav className='navbar navbar-dark bg-dark navbar-expand-lg'>
<Link to='/' className='navbar-brand'>product crud</Link>
<div className='ml-auto'>
    <ul className='navbar-nav'>
        <li className='nav-list'><Link to='/createproduct' className='nav-link'>createproduct</Link></li>
        <li className='nav-list'><Link to='/admin' className='nav-link'>Admin</Link></li>
        <li className='nav-list'><Link to='/productlist' className='nav-link'>Productlist</Link></li>
    </ul>
</div>

    </nav>
    </>
}

export default Navbar