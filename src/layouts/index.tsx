import { useState } from 'react';
import { PropsWithChildren } from 'react';
import Header from '../components/header';
import Drawer from '../components/drawer';
import { AnimatePresence } from 'framer-motion';

const Layout = ({children}: PropsWithChildren) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)

  return (
  <>
      <Header setIsDrawerOpen={setIsDrawerOpen} isDrawerOpen={isDrawerOpen}/>
      <main className='f-width'>
        {children}
      </main>


    <AnimatePresence initial={false}>
      {isDrawerOpen && <Drawer setIsOpen={setIsDrawerOpen}/>}
    </AnimatePresence>
    
  </>
  );
};

export default Layout;