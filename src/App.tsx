import { RouterProvider, createRouter } from '@tanstack/react-router'

import './styles/App.css'
import { routeTree } from './routeTree.gen'
import { useEffect } from 'react';
import toast, { Toaster } from 'react-hot-toast';
const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

function App() {
  useEffect(() => {
    toast(
      "Please note that this application utilizes free APIs, which may have limited requests and occasionally experience downtime.\n\nI apologize for any inconvenience this may cause.",
      {
        duration: 5000,
      }
    );
  }, [])
  return (
    <><div><Toaster /></div>
      <RouterProvider router={router} />

    </>
  )
}

export default App
