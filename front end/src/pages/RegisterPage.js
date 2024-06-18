// src/pages/RegisterPage.js
import React, { useState } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router-dom';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmployer, setIsEmployer] = useState(false);
  const history = useHistory();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('https://your-backend-url/api/auth/register', { name, email, password, isEmployer }); // Replace with your backend URL
      localStorage.setItem('token', res.data.token);
      history.push('/');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
        required
      />
      <input
        type="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Email"
        required
      />
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Password"
        required
      />
      <label>
        Employer?
        <input
          type="checkbox"
          checked={isEmployer}
          onChange={() => setIsEmployer(!isEmployer)}
        />
      </label>
      <button type="submit">Register</button>
    </form>
  );
};

export default RegisterPage;
