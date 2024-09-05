import React, { useState, useContext } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { ERPContext } from '../../context/ERPContext';

const InventoryForm = () => {
    const { dispatch } = useContext(ERPContext);
    const [submitted, setSubmitted] = useState(false);

    const formik = useFormik({
        initialValues: {
            name: '',
            quantity: '',
            value: '',
            supplier: '',
        },
        validationSchema: Yup.object({
            name: Yup.string().required('Item name is required'),
            quantity: Yup.number().required('Quantity is required').positive('Quantity must be positive'),
            value: Yup.number().required('Value is required').positive('Value must be positive'),
            supplier: Yup.string().required('Supplier name is required'),
        }),
        onSubmit: (values) => {
            dispatch({
                type: 'ADD_INVENTORY',
                payload: {
                    id: Date.now(),
                    name: values.name,
                    quantity: values.quantity,
                    value: values.value,
                    supplier: values.supplier,
                },
            });
            setSubmitted(true);
            formik.resetForm();
        },
    });

    return (
        <div className="inventory-form-container">
            <h1 className="text-2xl font-bold mb-4">Add New Inventory Item</h1>
            <form onSubmit={formik.handleSubmit} className="inventory-form grid grid-cols-1 gap-4">
                <div>
                    <label htmlFor="name" className="block text-gray-700">Item Name</label>
                    <input
                        id="name"
                        name="name"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.name}
                        className={`mt-2 p-2 border ${formik.touched.name && formik.errors.name ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {formik.touched.name && formik.errors.name ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.name}</div>
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
                    <label htmlFor="value" className="block text-gray-700">Value</label>
                    <input
                        id="value"
                        name="value"
                        type="number"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.value}
                        className={`mt-2 p-2 border ${formik.touched.value && formik.errors.value ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {formik.touched.value && formik.errors.value ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.value}</div>
                    ) : null}
                </div>

                <div>
                    <label htmlFor="supplier" className="block text-gray-700">Supplier</label>
                    <input
                        id="supplier"
                        name="supplier"
                        type="text"
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        value={formik.values.supplier}
                        className={`mt-2 p-2 border ${formik.touched.supplier && formik.errors.supplier ? 'border-red-500' : 'border-gray-300'} rounded-md`}
                    />
                    {formik.touched.supplier && formik.errors.supplier ? (
                        <div className="text-red-500 text-sm mt-1">{formik.errors.supplier}</div>
                    ) : null}
                </div>

                <button
                    type="submit"
                    className="mt-4 p-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition"
                >
                    Add Item
                </button>
                {submitted && (
                    <div className="mt-4 text-green-500">Item added successfully!</div>
                )}
            </form>
        </div>
    );
};

export default InventoryForm;
