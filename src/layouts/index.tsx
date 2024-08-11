import { useState } from 'react';
import { PropsWithChildren } from 'react';
import Header from '../components/header';
import Drawer from '../components/drawer';
import { AnimatePresence } from 'framer-motion';

const Layout = ({children}: PropsWithChildren) => {

  const [isDrawerOpen, setIsDrawerOpen] = useState(false)
  // const scrollPosition = useScrollPosition()

  console.log(isDrawerOpen)

  return (
  <>
    <div className="mx-auto">
      <Header setIsDrawerOpen={setIsDrawerOpen} />
      {children}
    </div>

    <AnimatePresence initial={false}>
      {isDrawerOpen && <Drawer setIsOpen={setIsDrawerOpen}/>}
    </AnimatePresence>
    
  </>
  );
};

export default Layout;