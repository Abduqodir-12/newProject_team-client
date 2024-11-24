import React, { useState } from 'react';
import { login, signup } from '../api/authRequistion';
import { toast } from 'react-toastify';
import { useInfoContext } from '../context/Context';

const Auth = () => {
    const { setCurrentUser } = useInfoContext();
    const [isSignup, setIsSignup] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);
        try {
            toast.loading('Please wait...');
            const formData = new FormData(e.target);
            let res;
            if (isSignup) {
                res = await signup(formData);
            } else {
                res = await login(formData);
            }

            toast.dismiss();
            toast.success(res.data.message);
            localStorage.setItem('account', JSON.stringify(res.data.user));
            localStorage.setItem('token', JSON.stringify(res.data.token));
            setCurrentUser(res.data.user);
        } catch (error) {
            toast.dismiss();
            toast.error(error?.response?.data?.message || 'Something went wrong!');
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="auth-container">
            <h1 className="auth-heading">avtoelon.uz</h1>

            <form onSubmit={handleSubmit} className="auth-form">
                <input type="phone" name="phone" className="auth-input" placeholder="Enter your phone number" required />
                <input type="password" name="password" className="auth-input" placeholder="Enter your password" required />

                <button disabled={loading} className="auth-btn">{isSignup ? 'Signup' : 'Login'}</button>
            </form>

            <span onClick={() => setIsSignup(!isSignup)} className="auth-toggle">{isSignup ? "I have an Account. Login" : "I don't have an Account. Signup"}</span>
        </div>
    );
};

export default Auth;