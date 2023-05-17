import '../styles/styles.css';

export const RegisterPage = () => {
  return (
    <div>
      <h1>Register Page</h1>

      <form noValidate>
        <input
          type="text"
          placeholder="Name"
        />
        <input
          type="email"
          placeholder="Email"
        />
        <input
          type="password"
          placeholder="Password 1"
        />

        <input
          type="password"
          placeholder="Password 2"
        />

        <button type="submit">Create</button>
      </form>
    </div>
  )
}
