import logo from '../styles/assets/img/logo.png'
import { Menu } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { navLinks, hashLinks } from '../utils/navLinks';
import { useLocation, NavLink } from 'react-router-dom';
import { routes } from '../routes/routes';

interface HeaderProps {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
  isDrawerOpen: boolean
}

const Header = ({setIsDrawerOpen, isDrawerOpen} : HeaderProps) => {

  const location = useLocation()

  return (
<header className='f-width'>
        
    <HashLink 
      to={`${routes.home}#hero`}
      className="logo-link | flex gap-100 align-center"
      scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
    >
      <img className='logo' src={logo} alt='logo'/>
      <h1>Brian.F</h1>
    </HashLink>

    <nav className="nav-primary | f-height" aria-label="main">
      <ul className='nav-primary_list | flex f-height'>
        
        {hashLinks.map(link => (
          <li className='nav-primary_li' key={link.name}>
            <HashLink 
              className={`${link.isActive(location.pathname, location.hash) ? 'nav-primary_link selected' : 'nav-primary_link'} | f-height relative`}
              to={link.path}
              scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: link.path === '/portfolio/#hero' ? 'end' : 'start'})}
              >
               {link.name}
            </HashLink>
          </li>
        ))}

        {navLinks.map(link => (
          <li className='nav-primary_li' key={link.name}>
            <NavLink 
                className={({ isActive }) => 
                  `${isActive ? "nav-primary_link selected" : "nav-primary_link"} | f-height relative `
                }
              to={link.path}
              >
               {link.name}
            </NavLink>
          </li>
        ))}

      </ul>
    </nav>

    <button className='btn_menu-hamburger' onClick={() => setIsDrawerOpen(true)} aria-label='menu' aria-expanded={isDrawerOpen}>
      <Menu size={40}/>
    </button>

</header>
  );
};

export default Header;