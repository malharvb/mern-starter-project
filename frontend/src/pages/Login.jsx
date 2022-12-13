import React, { useState } from 'react';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = () => {

  };
  return (
    <form onSubmit={handleSubmit} className="login-register-form">
      <label htmlFor="email">
        Email:
        <input type="text" id="email" onChange={(e) => { setEmail(e.target.value); }} value={email} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="text" id="password" onChange={(e) => { setPassword(e.target.value); }} value={password} />
      </label>
      <input type="submit" value="Login" />
    </form>
  );
}

export default Login;
