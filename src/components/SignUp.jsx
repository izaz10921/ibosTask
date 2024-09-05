import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState(null);

  const handleSignUp = (e) => {
    e.preventDefault();
    const { name, email, password, confirmPassword } = formData;

    // Check if all fields are filled
    if (!name || !email) {
      setError('Please fill in all fields');
      return;
    }

    // Check if passwords match
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }

    // Simulating successful signup (In a real app, you'd send data to a backend)
    localStorage.setItem(
      'user',
      JSON.stringify({ name, email, password })  // Save user information in localStorage
    );

    console.log('User signed up:', { name, email, password });

    // Reset form after successful signup
    setFormData({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    });

    // Navigate to login page
    navigate('/login');
  };

  const handleGoToLogin = () => {
    navigate('/login');
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold text-center">Sign Up</h1>
      <form onSubmit={handleSignUp} className="mt-5">
        <input
          type="text"
          placeholder="Name"
          value={formData.name}
          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          className="input input-bordered w-full mb-3"
        />
        <input
          type="email"
          placeholder="Email"
          value={formData.email}
          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
          className="input input-bordered w-full mb-3"
        />
        <input
          type="password"
          placeholder="Password"
          value={formData.password}
          onChange={(e) => setFormData({ ...formData, password: e.target.value })}
          className="input input-bordered w-full mb-3"
        />
        <input
          type="password"
          placeholder="Confirm Password"
          value={formData.confirmPassword}
          onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
          className="input input-bordered w-full mb-3"
        />
        {error && <p className="text-red-500">{error}</p>}
        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
      </form>

      <p className="text-center mt-5">
        Already have an account?{' '}
        <button onClick={handleGoToLogin} className="text-blue-500 underline">Login here</button>
      </p>
    </div>
  );
};

export default SignUp;
