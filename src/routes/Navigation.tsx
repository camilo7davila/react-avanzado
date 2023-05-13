import { lazy, Suspense } from 'react';
import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom'
import { Layout } from '../layaout/Layout';

const Lazy1 = lazy(() => import(/* webpackChunkName: "page1" */'../01-lazyload/pages/LazyPage1'));
const Lazy2 = lazy(() => import(/* webpackChunkName: "page2" */'../01-lazyload/pages/LazyPage2'));
const Lazy3 = lazy(() => import(/* webpackChunkName: "page3" */'../01-lazyload/pages/LazyPage3'));

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <h1>Error no se encuentra</h1>,
    children: [
      {
        path: '',
        element: <Navigate to='/lazy' replace />
      },
      {
        path: 'lazy1',
        element: <Lazy1 />
      },
      {
        path: 'lazy2',
        element: <Lazy2 />
      },
      {
        path: 'lazy3',
        element: <Lazy3 />
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
        <Suspense fallback={null}>
          <RouterProvider router={router} />
        </Suspense>
      </div>
    </>
  )
}
