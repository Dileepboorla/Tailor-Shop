import { NavLink } from 'react-router-dom';
import './Navbar.css'

const NavBar = ()=>{
    return (
            <nav>
                <ul>
                    <li className='heading'><NavLink to='/'>Tailor shop Manament</NavLink></li>
                </ul>
                <ul className='menu'>
                    <li><NavLink to='/blouse'>Blouse Designs 1 </NavLink></li>
                    <li><NavLink to='/embriodery'>Embriodery Designs</NavLink></li>
                    <li> <NavLink to='/about'>About </NavLink></li>
                    <li> <NavLink to='/contact'>Contact </NavLink></li>
                </ul>
                </nav>
    )
}

export default NavBar;