import { RouterProvider } from "react-router-dom"
import { router } from "./routes/router"
import { ToastProvider } from "./providers/toasts/toastProvider"

function App() {

  return (
  <ToastProvider>
    <RouterProvider router={router} />
  </ToastProvider>
  )
}

export default App
