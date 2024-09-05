import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ERPContext } from '../../context/ERPContext';

const SalesForm = () => {
    const { dispatch } = useContext(ERPContext);
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            productName: '',
            quantity: '',
            totalAmount: '',
            customerName: '',
        },
        validationSchema: Yup.object({
            productName: Yup.string().required('Product name is required'),
            quantity: Yup.number().required('Quantity is required').positive('Quantity must be positive'),
            totalAmount: Yup.number().required('Total amount is required').positive('Total amount must be positive'),
            customerName: Yup.string().required('Customer name is required'),
        }),
        onSubmit: (values) => {
            dispatch({
                type: 'UPDATE_SALES',
                payload: {
                    id: Date.now(),
                    productName: values.productName,
                    quantity: values.quantity,
                    totalAmount: values.totalAmount,
                    customerName: values.customerName,
                },
            });
            setSubmitted(true);
            formik.resetForm();
        },
    });

    return (
        <div className="sales-form-container">
            <h1 className="text-2xl font-bold mb-4">Add New Sale</h1>
            <form onSubmit={formik.handleSubmit} className="sales-form grid grid-cols-1 gap-4">
                <div>
                    <label htmlFor="productName" className="block text-gray-700">Product Name</label>
                    <input
                        id="productName"
                        name="productName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.productName}
                        className={`mt-2 p-2 border ${formik.touched.productName && formik.errors.productName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {formik.touched.productName && formik.errors.productName ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.productName}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="quantity" className="block text-gray-700">Quantity</label>
                    <input
                        id="quantity"
                        name="quantity"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.quantity}
                        className={`mt-2 p-2 border ${formik.touched.quantity && formik.errors.quantity ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {formik.touched.quantity && formik.errors.quantity ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.quantity}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="totalAmount" className="block text-gray-700">Total Amount</label>
                    <input
                        id="totalAmount"
                        name="totalAmount"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.totalAmount}
                        className={`mt-2 p-2 border ${formik.touched.totalAmount && formik.errors.totalAmount ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {formik.touched.totalAmount && formik.errors.totalAmount ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.totalAmount}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="customerName" className="block text-gray-700">Customer Name</label>
                    <input
                        id="customerName"
                        name="customerName"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.customerName}
                        className={`mt-2 p-2 border ${formik.touched.customerName && formik.errors.customerName ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {formik.touched.customerName && formik.errors.customerName ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.customerName}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    Add Sale
                </button>
                {submitted && (
                    <div className="mt-4 text-green-500">Sale added successfully!</div>
                )}
            </form>
        </div>
    );
};

export default SalesForm;
