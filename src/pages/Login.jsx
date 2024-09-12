import { useState } from 'react'
import Nav from '../components/Nav'
import { useNavigate } from "react-router-dom";

const Login = () => {
    const navigate = useNavigate();

    const handleLogin = () => {
        // Perform login logic here
        // ...
    
        // Redirect to Homepage
        navigate('/Library');
    };
    return (
        <div className="bg-white-100 flex justify-center items-center h-screen">
        <section className="login text-black p-4" style={{ maxWidth: '620px', width: '100%' }}>
          <h2 className="text-2xl text-center">Log in and let's start</h2>
          <section className="flex flex-col mt-4 container-with-label">
            <label htmlFor="email" className="text-sm">
              Email
            </label>
            <input
              placeholder="Email"
              type="email"
              name="email"
              className="w-full h-12 p-2 border border-black rounded-lg"
              style={{ maxWidth: '100%' }}
            />
            <label htmlFor="password" className="text-sm mt-2">
              Password
            </label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="w-full h-12 p-2 border border-black rounded-lg"
              style={{ maxWidth: '100%' }}
            />
            <span
              className="text-right text-sm opacity-75 mt-2 cursor-pointer"
              onClick={() => navigate("/forgot-password")}
            >
              Forgot Password?
            </span>
          </section>
          <button
            onClick={handleLogin}
            className="h-12 mt-4 bg-red-700 text-white rounded-lg w-full text-bold"
            style={{ maxWidth: '100%' }}
          >
            Log in
          </button>
        </section>
      </div>
        
        
     
);
};

export default Login