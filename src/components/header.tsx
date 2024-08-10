import logo from '../styles/assets/img/logo.png'
import { NavLink } from 'react-router-dom';
import { Menu } from 'lucide-react';

interface HeaderProps {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({setIsDrawerOpen} : HeaderProps) => {
  return (
<header className='f-width'>
        
    <NavLink to='/' className="logo-link | flex gap-100 align-center">
      <img className='logo' src={logo}/>
      <h1>Portfolio</h1>
    </NavLink>

    <nav className="nav-primary | f-height">
      <ul className='nav-primary_list | flex f-height'>
        <li className='nav-primary_li'>
          <NavLink className='nav-primary_link | f-height relative' to='/'>Accueil</NavLink>
        </li>
        <li className='nav-primary_li'>
          <NavLink className='nav-primary_link | f-height relative' to='/'>Compétences</NavLink>
        </li>
        <li className='nav-primary_li'>
          <NavLink className='nav-primary_link | f-height relative' to='/'>Projets</NavLink>
        </li>
      </ul>
    </nav>

    <button className='btn_menu-hamburger' onClick={() => setIsDrawerOpen(true)}>
      <Menu size={40}/>
    </button>

</header>
  );
};

export default Header;