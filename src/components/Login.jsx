import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleLogin = (e) => {
        e.preventDefault();

        // Retrieve stored user data from localStorage
        const storedUser = JSON.parse(localStorage.getItem('user'));

        // Validate login credentials
        if (!storedUser || storedUser.email !== email || storedUser.password !== password) {
            setError('Incorrect email or password.');
            return;
        }

        // If login is successful, redirect to the product list
        navigate('/products');
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">
            

            {/* Form Section */}
            <div className="md:w-1/2 flex items-center justify-center p-10">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center mb-6">Login</h1>
                    <form onSubmit={handleLogin}>
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
                        {error && <p className="text-red-500 mb-3">{error}</p>}
                        <button type="submit" className="btn btn-primary w-full">Login</button>
                    </form>
                </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 bg-cover" style={{ backgroundImage: `url('https://i.ibb.co/McsHGS3/photo-1590608897129-79f0904f17a1.webp')` }}>
            </div>
        </div>
    );
};

export default Login;
