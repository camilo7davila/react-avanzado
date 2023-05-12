import logo from '../assets/react.svg';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='main-layout'>
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink to='/lazy1' className={({ isActive }) => isActive ? 'nav-active' : ''}>Home</NavLink>
          </li>
          <li>
            <NavLink to='/lazy2' className={({ isActive }) => isActive ? 'nav-active' : ''}>About</NavLink>
          </li>
          <li>
            <NavLink to='/lazy3' className={({ isActive }) => isActive ? 'nav-active' : ''}>Users</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
