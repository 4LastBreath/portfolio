import { useState } from 'react';
import { PropsWithChildren } from 'react';
import Header from '../components/header';
import Drawer from '../components/drawer';
import { AnimatePresence } from 'framer-motion';
import useScrollPosition from '../hooks/useScrollPosition';

const Layout = ({children}: PropsWithChildren) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  const scrollPosition = useScrollPosition()

  return (
  <>
    <div className="mx-auto">
      <Header setIsDrawerOpen={setIsDrawerOpen} />
      {children}
    </div>

    <AnimatePresence initial={false}>
      {isDrawerOpen && <Drawer scrollPosition={scrollPosition} setIsOpen={setIsDrawerOpen}/>}
    </AnimatePresence>
    
  </>
  );
};

export default Layout;