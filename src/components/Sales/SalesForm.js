import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { PortfolioContext } from '../../context/PortfolioContext';

const SalesForm = () => {
    const { state, dispatch } = useContext(PortfolioContext);
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            type: '',
            amount: '',
            portfolio: '',
            date: '',
        },
        validationSchema: Yup.object({
            type: Yup.string().required('Transaction type is required'),
            amount: Yup.number().required('Amount is required').positive('Amount must be positive'),
            portfolio: Yup.string().required('Select a portfolio'),
            date: Yup.date().required('Date is required'),
        }),
        onSubmit: (values) => {
            dispatch({
                type: 'ADD_TRANSACTION',
                payload: {
                    id: Date.now(),
                    type: values.type,
                    amount: values.amount,
                    portfolioName: values.portfolio,
                    date: values.date,
                },
            });
            setSubmitted(true);
            formik.resetForm();
        },
    });

    return (
        <div className="sales-form-container p-8">
            <h1 className="text-3xl font-bold mb-6">New Transaction</h1>
            <form onSubmit={formik.handleSubmit} className="grid grid-cols-1 gap-6">
                <div>
                    <label htmlFor="type" className="block text-gray-700">Transaction Type</label>
                    <select
                        id="type"
                        name="type"
                        className={`mt-2 w-full px-4 py-3 border ${formik.touched.type && formik.errors.type ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.type}
                    >
                        <option value="" label="Select transaction type" />
                        <option value="buy" label="Buy" />
                        <option value="sell" label="Sell" />
                        <option value="transfer" label="Transfer" />
                    </select>
                    {formik.touched.type && formik.errors.type && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.type}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="amount" className="block text-gray-700">Amount</label>
                    <input
                        id="amount"
                        name="amount"
                        type="number"
                        className={`mt-2 w-full px-4 py-3 border ${formik.touched.amount && formik.errors.amount ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.amount}
                    />
                    {formik.touched.amount && formik.errors.amount && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.amount}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="portfolio" className="block text-gray-700">Select Portfolio</label>
                    <select
                        id="portfolio"
                        name="portfolio"
                        className={`mt-2 w-full px-4 py-3 border ${formik.touched.portfolio && formik.errors.portfolio ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.portfolio}
                    >
                        <option value="" label="Select portfolio" />
                        {state.portfolios.map((portfolio) => (
                            <option key={portfolio.id} value={portfolio.name}>
                                {portfolio.name}
                            </option>
                        ))}
                    </select>
                    {formik.touched.portfolio && formik.errors.portfolio && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.portfolio}</div>
                    )}
                </div>

                <div>
                    <label htmlFor="date" className="block text-gray-700">Transaction Date</label>
                    <input
                        id="date"
                        name="date"
                        type="date"
                        className={`mt-2 w-full px-4 py-3 border ${formik.touched.date && formik.errors.date ? 'border-red-500' : 'border-gray-300'} rounded-lg`}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.date}
                    />
                    {formik.touched.date && formik.errors.date && (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.date}</div>
                    )}
                </div>

                <button
                    type="submit"
                    className="w-full bg-green-500 text-white py-3 rounded-lg hover:bg-green-600 transition"
                >
                    Add Transaction
                </button>

                {submitted && (
                    <div className="text-green-500 mt-4">Transaction added successfully!</div>
                )}
            </form>
        </div>
    );
};

export default SalesForm;
