import logo from '../styles/assets/img/logo.png'
import { Menu } from 'lucide-react';
import { HashLink } from 'react-router-hash-link';
import { navLinks } from '../utils/navLinks';
import { useLocation } from 'react-router-dom';

interface HeaderProps {
  setIsDrawerOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Header = ({setIsDrawerOpen} : HeaderProps) => {

  const location = useLocation()

  return (
<header className='f-width'>
        
    <HashLink 
      to='/portfolio/#hero' 
      className="logo-link | flex gap-100 align-center"
      scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
    >
      <img className='logo' src={logo}/>
      <h1>Portfolio</h1>
    </HashLink>

    <nav className="nav-primary | f-height">
      <ul className='nav-primary_list | flex f-height'>
        
        {navLinks.map(link => (
          <li className='nav-primary_li' key={link.name}>
            <HashLink 
              className={`${link.isActive(location.pathname, location.hash) ? 'nav-primary_link selected' : 'nav-primary_link'} | f-height relative`}
              to={link.path}
              scroll={(el) => el.scrollIntoView({ behavior: 'auto', block: 'end' })}
              >
               {link.name}
            </HashLink>
          </li>
        ))}
      </ul>
    </nav>

    <button className='btn_menu-hamburger' onClick={() => setIsDrawerOpen(true)}>
      <Menu size={40}/>
    </button>

</header>
  );
};

export default Header;