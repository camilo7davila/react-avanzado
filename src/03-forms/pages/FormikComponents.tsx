import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

import '../styles/styles.css';

export const FormikComponents = () => {
  return (
    <div>
      <h1>Formik Components</h1>

      <Formik
        initialValues={{
          firstName: '',
          lastName: '',
          email: 'cam@gmail.com',
          terms: false,
          jobType: ''
        }}
        onSubmit={(values) => {
          console.log(values);
        }}
        validationSchema={Yup.object({
          firstName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          lastName: Yup.string()
            .max(15, 'Debe de tener 15 caracteres o menos')
            .required('Requerido'),
          email: Yup.string()
            .email('No es un email valido')
            .required('Requerido'),
          terms: Yup.boolean()
            .isTrue(),
          jobType: Yup.string()
            .required('Requerido')
            .notOneOf(['it-jr'], 'Opcion no permitida')
        })}
      >
        {
          (formik) => (
            <Form>
              <label htmlFor="firstName">First Name</label>
              <Field name='firstName' type="text" />
              <ErrorMessage name='firstName' component='span' />

              <label htmlFor="lastName">Last Name</label>
              <Field name='lastName' type="text" />
              <ErrorMessage name='lastName' component='span' />

              <label htmlFor="email">Email Address</label>
              <Field name='email' type="email" />
              <ErrorMessage name='email' component='span' />

              <label>Terms and conditions</label>
              <Field name='terms' type="checkbox" />
              <ErrorMessage name='terms' component='span' />

              <label>Job Type</label>
              <Field name='jobType' as="select">
                <option value="">Pick Something</option>
                <option value="developer">Developer</option>
                <option value="designer">Designer</option>
                <option value="it-senior">IT Senior</option>
                <option value="it-jr">IT Junior</option>
              </Field>
              <ErrorMessage name='jobType' component='span' />

              <button type="submit" disabled={!formik.isValid}>Create</button>
            </Form>
          )
        }
      </Formik>
    </div>
  )
}
