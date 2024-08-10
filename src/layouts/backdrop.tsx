import React, { useEffect } from 'react';
import { motion, usePresence } from 'framer-motion';
import FocusTrap from 'focus-trap-react';

interface BackdropProps {
  children: React.ReactNode
  onClick: () => void
}

const Backdrop = ({children, onClick} : BackdropProps) => {

  const animation = {
    initial:{opacity: 0},
    animate:{opacity: 1},
    exit:{opacity: 0, transition: {duration: 0.2}},
    transition:{
      ease: 'linear'
    }
  }

  const [isPresent, safeToRemove] = usePresence();

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 200)
  }, [isPresent, safeToRemove])
   
  return (
<FocusTrap>
    <motion.div
      key='backdrop'
      className='backdrop'
      onClick={onClick}
      {...animation}
    >
      {children}

    </motion.div>
</FocusTrap>
  );
};

export default Backdrop;