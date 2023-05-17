import { FormikErrors, useFormik } from 'formik'
import '../styles/styles.css';

interface FormValues {
  firstName: string;
  lastName: string;
  email: string;
}

export const FormikBasicPage = () => {
  const validate = ({ firstName, lastName, email }: FormValues) => {
    const errors: FormikErrors<FormValues> = {};

    if (!firstName.trim()) {
      errors.firstName = 'Requiered'
    }

    if (!lastName.trim()) {
      errors.lastName = 'Requiered'
    }

    if (!email.trim()) {
      errors.email = 'Requiered'
    } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(email)) {
      errors.email = 'Invalid email address';
    }

    return errors
  }

  const { handleChange, values, handleSubmit, errors, isValid, touched, handleBlur } = useFormik({
    initialValues: {
      firstName: '',
      lastName: '',
      email: 'cam@gmail.com'
    },
    onSubmit: (values) => {
      console.log(values)
    },
    validate
  });

  return (
    <div>
      <h1>Formik Basic Tutorial</h1>

      <form noValidate onSubmit={handleSubmit}>
        <label htmlFor="firstName">First Name</label>
        <input
          type="text"
          name="firstName"
          onBlur={handleBlur}
          value={values.firstName}
          onChange={handleChange}
        />
        { touched.firstName && errors.firstName && <span>{errors.firstName}</span>}

        <label htmlFor="lastName">Last Name</label>
        <input
          type="text"
          name="lastName"
          onBlur={handleBlur}
          value={values.lastName}
          onChange={handleChange}
        />
        { touched.lastName && errors.lastName && <span>{errors.lastName}</span>}

        <label htmlFor="firstName">Email Address</label>
        <input
          type="email"
          name="email"
          onBlur={handleBlur}
          value={values.email}
          onChange={handleChange}
        />
        { touched.email && errors.email && <span>{ errors.email }</span>}

        <button type="submit" disabled={!isValid}>Create</button>
      </form>
    </div>
  )
}
