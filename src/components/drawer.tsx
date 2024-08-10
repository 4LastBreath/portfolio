import React, { useEffect } from 'react';
import Backdrop from '../layouts/backdrop';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../styles/assets/img/logo.png'
import { useCurrentWidth } from '../hooks/useScreenSize';

interface DrawerProps {
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>
  scrollPosition: number
}

const Drawer = ({setIsOpen, scrollPosition} : DrawerProps) => {

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

  useEffect(() => {
    document.body.classList.add('no-scroll')
    document.body.style.top = `-${scrollPosition}px`

    return () => {
      document.body.classList.remove('no-scroll')
      document.body.style.top = ''
      window.scrollTo({top: scrollPosition, left: 0, behavior: 'auto'})
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
          <li className='nav-primary_li'>
            <NavLink className='nav-primary_link nav-drawer-link | relative' to='/'>Accueil</NavLink>
          </li>
          <li className='nav-primary_li'>
            <NavLink className='nav-primary_link nav-drawer-link | relative' to='/'>Compétences</NavLink>
          </li>
          <li className='nav-primary_li'>
            <NavLink className='nav-primary_link nav-drawer-link | relative' to='/'>Projets</NavLink>
          </li>
        </ul>
    </nav>

  </motion.div>
</Backdrop>
  );
};

export default Drawer;