import React, { useEffect } from 'react';
import Backdrop from '../layouts/backdrop';
import { NavLink, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../styles/assets/img/logo.png'
import { useCurrentWidth } from '../hooks/useScreenSize';
import { HashLink } from 'react-router-hash-link';
import { navLinks } from '../utils/navLinks';

interface DrawerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
}

const Drawer = ({setIsOpen} : DrawerProps) => {

  const drawerAnimation = {
    initial: {
      x: -200,
      opacity: 0
    },
    animate: {
      x: 0,
      opacity: 1
    },
    exit: {
      x: -200,
      opacity: 0,
      transition: {duration: 0.2}
    },
    transition : {
      duration: 0.2,
      ease: 'linear'
    }
  }

  const { tablet } = useCurrentWidth()
  const location = useLocation()

  useEffect(() => {
    document.body.classList.add('no-scroll')

    return () => {
      document.body.classList.remove('no-scroll')
    }
  }, [])

  useEffect(() => {
    if (tablet) {
      setIsOpen(false)
    }
  }, [tablet, setIsOpen])

  return (
<Backdrop onClick={() => setIsOpen(false)}>
  <motion.div 
    className='drawer' 
    onClick={(e) => e.stopPropagation()}
    {...drawerAnimation}
  >

    <NavLink to='/' className="logo-link | flex gap-100 align-center justify-center">
      <img className='logo' src={logo}/>
      <h1>Portfolio</h1>
    </NavLink>

    <div className='drawer_line | mx-auto'/>

    <nav className="nav-drawer | f-height">
        <ul className='nav-primary_list | flex flex-column'>
          {navLinks.map(link => (
            <li className='nav-primary_li' key={link.name}>
              <HashLink 
                className={`${link.isActive(location.pathname, location.hash) ? 'nav-primary_link selected' : 'nav-primary_link'} nav-drawer-link | f-height relative`}
                to={link.path}
                onClick={() => setIsOpen(false)}
                scroll={(el) => el.scrollIntoView({ behavior: 'smooth', block: link.path === '/portfolio/#hero' ? 'end' : 'start' })}
              >
                {link.name}
              </HashLink>
            </li>
          ))}
        </ul>
    </nav>

  </motion.div>
</Backdrop>
  );
};

export default Drawer;