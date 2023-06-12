import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import { BrowserRouter, createBrowserRouter, RouterProvider } from 'react-router-dom'
import OurThings from './components/our-things/our-things.tsx'
import Prints from './components/prints/prints.tsx'
import GlobalStyle from './global-style.ts'
import Texto from './components/texto/texto.tsx'

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },{
    path: "/our-things",
    element: <OurThings />,
  },{
    path: "/prints",
    element: <Prints />,
  },{
    path: "/texto",
    element: <Texto />,
  }
]);


ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
      <GlobalStyle />
      <RouterProvider router={router} />
  </React.StrictMode>,
)
