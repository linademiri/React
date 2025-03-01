import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginForm = () => {
    const [userForm, setUserForm] = useState({ username: '', password: '' });
    const [errorText, setErrorText] = useState('');
    const navigate = useNavigate();

    function loginBtn() {
        if (!userForm.username || !userForm.password) {
            setErrorText('Të gjitha fushat janë të detyrueshme!');
        } else {
            localStorage.setItem("logged", JSON.stringify(true));
            navigate('/products');
        }
    }

    return (
        <div className=" min-h-screen flex items-center justify-center">

            < div className="bg-white p-8 rounded-xl shadow-lg w-96" >
                <h1 className="text-3xl font-bold text-gray-700 text-center mb-6">Login</h1>
                <div className="space-y-4">
                    <input
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 transition"
                        type="text"
                        placeholder="Name"
                        name="username"
                        onChange={(e) => setUserForm({ ...userForm, username: e.target.value })}
                        value={userForm.username}
                    />
                    <input
                        className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-gray-600 transition"
                        type="password"
                        placeholder="Password"
                        name="password"
                        onChange={(e) => setUserForm({ ...userForm, password: e.target.value })}
                        value={userForm.password}
                    />

                    {errorText && <p className="text-red-500 text-sm">{errorText}</p>}

                    <button
                        className="w-full p-3 bg-blue-600 text-white font-semibold rounded-lg hover:bg-blue-700 transition shadow-md"
                        onClick={loginBtn}
                    >
                        Login
                    </button>
                </div>
            </div >
        </div >
    );
};

export default LoginForm;
