import React, { useEffect } from 'react';
import { useTimeout  } from '../../hooks/useTimeout';
import { CircleCheckBig, CircleX, Info, X } from 'lucide-react';
import { IconButton } from './button';
import { easeInOut, motion, usePresence } from 'framer-motion';
import { ToastVariant } from '../../providers/toasts/toastProvider';

interface ToastProps {
  message: string
  variant: ToastVariant
  close: () => void
}

export const Toast = ({message, variant, close} : ToastProps) => {

  const [isPresent, safeToRemove] = usePresence();

  const icons: { [key in ToastProps['variant']]: React.ReactNode } = {
    info: <Info className='toast_icon' />,
    error: <CircleX className='toast_icon' />,
    success: <CircleCheckBig className='toast_icon' />
  };

  const IconComponent = icons[variant];

  useEffect(() => {
    !isPresent && setTimeout(safeToRemove, 100)
  }, [isPresent, safeToRemove])

  useTimeout(() => {
    close()
  }, 5000)

  return (
<motion.div 
  className={`toast ${variant} | relative flex space-between`}
  initial={{x: '-100%', opacity: 0, skewX: '-15deg'}}
  animate={{x: 0, opacity: 1}}
  exit={{x: '-100%', opacity: 1, transition: {duration: 0.1}}}
  transition={{
    type: easeInOut,
    duration: 0.2
  }}
>

      <div className='flex gap-100'>
          {IconComponent}
        <p className='toast_message'>
          {message}
        </p>
      </div>

      <div className='toast_line'/>

      <IconButton aria-label='close'>
        <X onClick={close}/>
      </IconButton>

</motion.div>
  );
};