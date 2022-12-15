import React, { useState } from 'react';

import useLogin from '../hooks/useLogin';

function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const { error, isLoading, login } = useLogin();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const success = await login(email, password);
    if (success) {
      setEmail('');
      setPassword('');
    }
  };
  return (
    <form onSubmit={handleSubmit} className="login-register-form">
      <label htmlFor="email">
        Email:
        <input type="text" id="email" onChange={(e) => { setEmail(e.target.value); }} value={email} />
      </label>
      <label htmlFor="password">
        Password:
        <input type="password" id="password" onChange={(e) => { setPassword(e.target.value); }} value={password} />
      </label>
      <input type="submit" value="Login" disabled={isLoading} />
      {error && <div className="error-msg">{error}</div>}
    </form>
  );
}

export default Login;
