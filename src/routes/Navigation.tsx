import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layaout/Layout';

import { LazyPage1, LazyPage2, LazyPage3 } from '../01-lazyload/pages';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <h1>Error no se encuentra</h1>,
    children: [
      {
        path: 'lazy1',
        element: <LazyPage1 />
      },
      {
        path: 'lazy2',
        element: <LazyPage2 />
      },
      {
        path: 'lazy3',
        element: <LazyPage3 />
      },
      {
        path: '/*',
        element: <Navigate to='/lazy1' replace />
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
