import logo from '../assets/react.svg';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='main-layout'>
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink to='/shopping' className={({ isActive }) => isActive ? 'nav-active' : ''}>Shopping</NavLink>
          </li>
          <li>
            <NavLink to='/about' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
          </li>
          <li>
            <NavLink to='/users' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
