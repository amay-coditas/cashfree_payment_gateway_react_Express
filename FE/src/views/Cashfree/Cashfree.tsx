import React, { useState } from 'react';
import axios from 'axios';
const CASHFREE_BASE_URL = import.meta.env.VITE_CASHFREE_BASE_URL;
import { load } from '@cashfreepayments/cashfree-js';

interface FormData {
  customerId: string;
  customerName: string;
  phoneNumber: string;
  email: string;
  orderAmount: number;
}

const axiosInstance = axios.create({
  baseURL: CASHFREE_BASE_URL,
  headers: {
    "Accept": "application/json, text/plain, */*",
    "Content-Type": "application/json",
  }
});

const Cashfree = () => {
  const [formData, setFormData] = useState<FormData>({
    customerId: '',
    customerName: '',
    phoneNumber: '',
    email: '',
    orderAmount: 0
  });

  const getPaymentSession = async (formData: FormData) => {
    const response = await axiosInstance.post(`/cashfree/payment`, { ...formData });
    const { payment_session_id, order_id } = response.data;
    return { payment_session_id, order_id };
   };

  const verifyPayment = async (order_id: string) => {
    try {
      const response = await axiosInstance.post(`/cashfree/verify`, { order_id });
      if (response.data) {
        alert("Payment successful");
      }
    } catch (error) {
      console.log(error);
    }
  }

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: name === 'orderAmount' ? parseFloat(value) || 0 : value
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const { payment_session_id, order_id } = await getPaymentSession(formData);
    const cashfree = await load({
      mode: "sandbox",
    })
    
    const checkoutOptions = {
      paymentSessionId: payment_session_id,
      redirectTarget: "_modal",
    }

    const result = await cashfree.checkout(checkoutOptions);
    if (result.paymentDetails) {
      verifyPayment(order_id);
    }

    setFormData({ 
      customerId: '',
      customerName: '',
      phoneNumber: '',
      email: '',
      orderAmount: 0
    });
  };

  return (
    <div style={{ padding: '20px', maxWidth: '500px', margin: '0 auto' }}>
      <h2>Customer Order Form</h2>
      
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        <div>
          <label htmlFor="customerId" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Customer ID:
          </label>
          <input
            type="text"
            id="customerId"
            name="customerId"
            value={formData.customerId}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Enter customer ID"
          />
        </div>

        <div>
          <label htmlFor="customerName" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Customer Name:
          </label>
          <input
            type="text"
            id="customerName"
            name="customerName"
            value={formData.customerName}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Enter customer name"
          />
        </div>

        <div>
          <label htmlFor="phoneNumber" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Phone Number:
          </label>
          <input
            type="tel"
            id="phoneNumber"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Enter phone number"
          />
        </div>

        <div>
          <label htmlFor="email" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Email:
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleInputChange}
            required
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Enter email address"
          />
        </div>

        <div>
          <label htmlFor="orderAmount" style={{ display: 'block', marginBottom: '8px', fontWeight: 'bold' }}>
            Order Amount:
          </label>
          <input
            type="number"
            id="orderAmount"
            name="orderAmount"
            value={formData.orderAmount}
            onChange={handleInputChange}
            required
            min="0"
            step="0.01"
            style={{
              width: '100%',
              padding: '12px',
              border: '1px solid #ccc',
              borderRadius: '4px',
              fontSize: '16px'
            }}
            placeholder="Enter order amount"
          />
        </div>

        <button
          type="submit"
          style={{ marginTop: '20px', padding: '12px', borderRadius: '4px', backgroundColor: '#000', color: '#fff' }}
        >
          Submit Order
        </button>
      </form>

      {/* Display form data for debugging */}
      <div style={{ marginTop: '30px', padding: '32px', backgroundColor: '#f5f5f5', borderRadius: '4px' }}>
        <h3>Current Form Data:</h3>
        <pre>{JSON.stringify(formData, null, 2)}</pre>
      </div>
    </div>
  );
};

export default Cashfree;
