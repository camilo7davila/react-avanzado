import { Navigate, RouterProvider, createBrowserRouter } from "react-router-dom"
import { Layout } from "../layaout/Layout"
import { ShoppingPage } from "../02-component-patterns/pages/ShoppingPage"

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <h1>Error no se encuentra</h1>,
    children: [
      {
        index: true,
        element: <Navigate to='/shopping' replace />
      },
      {
        path: 'about',
        element: <h1>About page</h1>
      },
      {
        path: 'users',
        element: <h1>Users page</h1>
      },
      {
        path: 'shopping',
        element: <ShoppingPage />
      },
      {
        path: '/*',
        element: <Navigate to='/shopping' replace />
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
