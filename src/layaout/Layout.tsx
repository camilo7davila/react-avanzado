import logo from '../assets/react.svg';
import { NavLink, Outlet } from 'react-router-dom';

export const Layout = () => {
  return (
    <div className='main-layout'>
      <nav>
        <img src={logo} alt="React Logo" />
        <ul>
          <li>
            <NavLink to='/register' className={({ isActive }) => isActive ? 'nav-active' : ''}>Register</NavLink>
          </li>
          <li>
            <NavLink to='/formik-basic' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Basic</NavLink>
          </li>
          <li>
            <NavLink to='/formik-yup' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Yup</NavLink>
          </li>
          <li>
            <NavLink to='/formik-components' className={({ isActive }) => isActive ? 'nav-active' : ''}>Formik Components</NavLink>
          </li>
        </ul>
      </nav>
      <Outlet />
    </div>
  )
}
