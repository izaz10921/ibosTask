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

        if (!name || !email) {
            setError('Please fill in all fields');
            return;
        }

        if (password !== confirmPassword) {
            setError('Passwords do not match');
            return;
        }

        // Store user data in localStorage (For demonstration purposes)
        localStorage.setItem(
            'user',
            JSON.stringify({ name, email, password })
        );

        // Reset form after successful signup
        setFormData({
            name: '',
            email: '',
            password: '',
            confirmPassword: '',
        });

        // Navigate to login page after successful signup
        navigate('/login');
    };

    const handleGoToLogin = () => {
        navigate('/login');
    };

    return (
        <div className="flex flex-col md:flex-row h-screen">


            {/* Form Section */}
            <div className="md:w-1/2 flex items-center justify-center p-10">
                <div className="w-full max-w-md">
                    <h1 className="text-3xl font-bold text-center mb-6">Sign Up</h1>
                    <form onSubmit={handleSignUp}>
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
                        {error && <p className="text-red-500 mb-3">{error}</p>}
                        <button type="submit" className="btn btn-primary w-full">Sign Up</button>
                    </form>

                    <p className="text-center mt-5">
                        Already have an account?{' '}
                        <button onClick={handleGoToLogin} className="text-blue-500 underline">Login here</button>
                    </p>
                </div>
            </div>

            {/* Image Section */}
            <div className="md:w-1/2 bg-cover" style={{ backgroundImage: `url('https://i.ibb.co/McsHGS3/photo-1590608897129-79f0904f17a1.webp')` }}>
            </div>
        </div>
    );
};

export default SignUp;
