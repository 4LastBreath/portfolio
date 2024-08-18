import { useEffect, useMemo, useState, PropsWithChildren } from 'react';
import { ToastContext } from './toastContext';
import { Toast } from '../../components/ui/toast';
import { AnimatePresence, motion } from 'framer-motion';

export type ToastVariant = "info" | "error" | "success"

type ToastType = {
  message: string
  variant: ToastVariant
  id: number
}

export function ToastProvider({children} : PropsWithChildren) {

  const [toasts, setToasts] = useState<ToastType[]>([])

  function openToast(message: string, variant: ToastVariant) {
    const newToast = {
      id: Date.now(),
      message: message,
      variant: variant
    }

    setToasts((prev) => [...prev, newToast])

  }

  function closeToast(id: number) {
    setToasts((prev) => 
      prev.filter((toast) => toast.id !== id)
    )
  }

  const contextValue = useMemo(() => ({
    info: (message: string) => openToast(message, 'info'),
    success: (message: string) => openToast(message, 'success'),
    error: (message: string) => openToast(message, 'error'),
    close: closeToast
  }), [])

  useEffect(() => {
    const firstToast = toasts[0]

    if (toasts.length > 3) {
      closeToast(firstToast.id)
    }
  }, [toasts])

  return (
<>
<ToastContext.Provider value={contextValue}>

  {children}
  
  <AnimatePresence>
    {toasts.length !== 0 && 
      <motion.div 
      className='toasts_container | flex flex-column gap-75'
        key={'toast-container'}
        initial={{opacity: 1, x: 0}}
        animate={{opacity: 1, x: 0}}
        exit={{opacity: 0, x: '-100%', transition: {duration: 0.2}}}
      >
        <AnimatePresence>
          {toasts.map(toast => {
            return (
              <Toast 
                key={toast.id}
                message={toast.message} 
                variant={toast.variant}
                close={() => closeToast(toast.id)}
              />
            )
          })}
        </AnimatePresence>
      </motion.div>
    }
  </AnimatePresence>

</ToastContext.Provider>
</>
      
 )
}