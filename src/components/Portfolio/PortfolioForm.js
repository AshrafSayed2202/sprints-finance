import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PortfolioContext } from '../../context/PortfolioContext';

const PortfolioForm = () => {
    const { dispatch } = useContext(PortfolioContext);
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            value: '',
            performance: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Portfolio name is required'),
            value: Yup.number().required('Value is required').positive('Value must be positive'),
            performance: Yup.number().required('Performance is required'),
        }),
        onSubmit: (values) => {
            dispatch({
                type: 'ADD_PORTFOLIO',
                payload: {
                    id: Date.now(),
                    name: values.name,
                    value: values.value,
                    performance: values.performance,
                    assets: [],
                },
            });
            setSubmitted(true);
            formik.resetForm();
        },
    });

    return (
        <div className="portfolio-form-container p-8">
            <h1 className="text-3xl font-bold mb-6">Create New Portfolio</h1>
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6">
                <div>
                    <label htmlFor="name" className="block text-gray-700">Portfolio Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        className={`mt-2 w-full px-4 py-3 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                    />
                    {formik.touched.name && formik.errors.name && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="value" className="block text-gray-700">Portfolio Value</label>
                    <input
                        id="value"
                        name="value"
                        type="number"
                        className={`mt-2 w-full px-4 py-3 border ${formik.touched.value && formik.errors.value ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.value}
                    />
                    {formik.touched.value && formik.errors.value && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.value}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="performance" className="block text-gray-700">Portfolio Performance (%)</label>
                    <input
                        id="performance"
                        name="performance"
                        type="number"
                        className={`mt-2 w-full px-4 py-3 border ${formik.touched.performance && formik.errors.performance ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.performance}
                    />
                    {formik.touched.performance && formik.errors.performance && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.performance}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-3 rounded-lg hover:bg-blue-600 transition"
                >
                    Create Portfolio
                </button>

                {submitted && (
                    <div className="text-green-500 mt-4">Portfolio created successfully!</div>
                )}
            </form>
        </div>
    );
};

export default PortfolioForm;
