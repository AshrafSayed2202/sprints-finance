import React from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate();

    const formik = useFormik({
        initialValues: {
            username: '',
            email: '',
            password: '',
            confirmPassword: '',
        },
        validationSchema: Yup.object({
            username: Yup.string().required('Username is required'),
            email: Yup.string().email('Invalid email address').required('Email is required'),
            password: Yup.string().min(6, 'Password must be at least 6 characters').required('Password is required'),
            confirmPassword: Yup.string()
                .oneOf([Yup.ref('password'), null], 'Passwords must match')
                .required('Confirm password is required'),
        }),
        onSubmit: (values) => {
            console.log('User registered:', values);
            navigate('/login');
        },
    });

    return (
        <div className="register-container flex justify-center items-center min-h-screen bg-gray-100">
            <div className="register-box bg-white p-8 shadow-lg rounded-lg w-full max-w-lg">
                <h2 className="text-3xl font-semibold mb-6 text-gray-800">Create Account</h2>

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
                        <label htmlFor="email" className="block text-gray-700">Email</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            className={`mt-2 w-full px-4 py-2 border ${formik.touched.email && formik.errors.email ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.email}
                        />
                        {formik.touched.email && formik.errors.email ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.email}</div>
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

                    <div className="mb-4">
                        <label htmlFor="confirmPassword" className="block text-gray-700">Confirm Password</label>
                        <input
                            id="confirmPassword"
                            name="confirmPassword"
                            type="password"
                            className={`mt-2 w-full px-4 py-2 border ${formik.touched.confirmPassword && formik.errors.confirmPassword ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                            onChange={formik.handleChange}
                            onBlur={formik.handleBlur}
                            value={formik.values.confirmPassword}
                        />
                        {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
                            <div className="text-red-500 text-sm mt-1">{formik.errors.confirmPassword}</div>
                        ) : null}
                    </div>

                    <button
                        type="submit"
                        className="w-full bg-green-500 text-white py-2 rounded-md hover:bg-green-600 transition"
                    >
                        Register
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Register;
