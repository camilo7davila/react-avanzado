import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "../layaout/Layout"

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <h1>Error no se encuentra</h1>,
    children: [
      {
        path: 'about',
        element: <h1>About page</h1>
      },
      {
        path: 'users',
        element: <h1>Users page</h1>
      },
      {
        path: 'home',
        element: <h1>Home page</h1>
      },
      {
        path: '/*',
        element: <Navigate to='/home' replace />
      }
    ]
  }
])

export const Navigation = () => {
  return (
    <>
      <div className="main-layout">
        <RouterProvider router={router} />
      </div>
    </>
  )
}
