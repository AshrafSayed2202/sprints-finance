import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../hooks/useAuth';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const { login } = useAuth();
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            password: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            password: Yup.string()
                .min(6, 'Password must be at least 6 characters')
                .required('Password is required'),
        }),
        onSubmit: (values) => {
            login(values.username, values.password);
            navigate('/');
        },
    });

    return (
        <div className="login-container flex justify-center items-center min-h-screen bg-gray-200">
            <div className="login-box bg-white shadow-lg p-10 rounded-lg w-full max-w-md">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Sign In</h2>
                <form onSubmit={formik.handleSubmit}>
                    <div className="mb-4">
                        <label htmlFor="username" className="block text-gray-700">Username</label>
                        <input
                            id="username"
                            name="username"
                            type="text"
                            className={`mt-2 w-full px-4 py-2 border ${formik.touched.username && formik.errors.username ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.username}
                        />
                        {formik.touched.username && formik.errors.username ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.username}</div>
                        ) : null}
                    </div>

                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-700">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            className={`mt-2 w-full px-4 py-2 border ${formik.touched.password && formik.errors.password ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.password}
                        />
                        {formik.touched.password && formik.errors.password ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.password}</div>
                        ) : null}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-indigo-600 text-white py-2 rounded-md hover:bg-indigo-700 transition"
                    >
                        Login
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Login;
