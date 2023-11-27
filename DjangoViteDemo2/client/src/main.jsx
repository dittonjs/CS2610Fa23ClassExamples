import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import 'vite/modulepreload-polyfill'

import {createHashRouter, RouterProvider} from "react-router-dom";
import { Home } from './pages/Home.jsx'
import { CreateNote } from './pages/CreateNote.jsx'

const router = createHashRouter([
  {
    path: "",
    element: <App/>,
    children: [
      {
        path: "",
        element: <Home />
      },
      {
        path: "/create_note",
        element:  <CreateNote />
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')).render(
    <RouterProvider router={router} />
)
