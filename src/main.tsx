import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'

import './styles.css'

import App from './App.tsx'
import Dashboard from './pages/Dashboard/Dashboard.tsx'
import Rooms from './pages/Rooms/Rooms.tsx'
import Users from './pages/Users/Users.tsx'

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        children: [
            {
                path: "/",
                element: <Dashboard />
            },
            {
                path: "/rooms",
                element: <Rooms />
            },
            {
                path: "/users",
                element: <Users />
            },
        ]
    },
]);

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>,
)
