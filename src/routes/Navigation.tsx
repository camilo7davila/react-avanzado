import { Navigate, RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Layout } from '../layaout/Layout';
import { RegisterPage } from '../03-forms/pages/RegisterPage';
import { FormikBasicPage } from '../03-forms/pages/FormikBasicPage';
import { FormikYupPage } from '../03-forms/pages/FormikYupPage';
import { FormikComponents } from '../03-forms/pages/FormikComponents';

const router = createBrowserRouter([
  {
    path: '',
    element: <Layout />,
    errorElement: <h1>Error no se encuentra</h1>,
    children: [
      {
        index: true,
        element: <Navigate to='/register' replace />
      },
      {
        path: 'register',
        element: <RegisterPage />
      },
      {
        path: 'formik-basic',
        element: <FormikBasicPage />
      },
      {
        path: 'formik-yup',
        element: <FormikYupPage />
      },
      {
        path: 'formik-components',
        element: <FormikComponents />
      },
      {
        path: '/*',
        element: <Navigate to='/register' replace />
      }
    ]
  }
])

export const Navigation = () => {
  return (
    <>
      <div className='main-layout'>
        <RouterProvider router={router} />
      </div>
    </>
  )
}
