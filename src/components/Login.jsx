import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(null);

  const handleLogin = (e) => {
    e.preventDefault();

    // Get the stored user data from localStorage
    const storedUser = JSON.parse(localStorage.getItem('user'));

    // If no user is signed up
    if (!storedUser) {
      setError('No user found. Please sign up first.');
      return;
    }

    // Compare entered credentials with stored user data
    if (storedUser.email === email && storedUser.password === password) {
      // If credentials match, log the user in and redirect to the ProductList page
      console.log('User logged in:', { email, password });
      navigate('/products');
    } else {
      // If credentials don't match, show an error
      setError('Incorrect email or password.');
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Login</h1>
      <form onSubmit={handleLogin} className="mt-5">
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="input input-bordered w-full mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="input input-bordered w-full mb-3"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="btn btn-primary w-full">Login</button>
      </form>
    </div>
  );
};

export default Login;
