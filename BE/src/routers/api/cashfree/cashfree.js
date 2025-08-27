import express from 'express';
import { Cashfree, CFEnvironment } from 'cashfree-pg';
import crypto from 'crypto';

export const router = express.Router();

const cashfree = new Cashfree(
  CFEnvironment.SANDBOX,
  'TEST10773442bf4db7ec99f33aa7a58024437701',
  'cfsk_ma_test_1f76b9d6a71b30586f573b63eef82522_98d5366e'
);
const generateOrderId = async () => {
  const uniqueId = crypto.randomBytes(16).toString('hex');

  const hash = crypto.createHash('sha256');
  hash.update(uniqueId);

  const orderId = hash.digest('hex');

  return orderId.substr(0, 12);
};

router.get('/', (_, res) => {
  res.json({
    message: 'Cashfree API is working',
  });
  res.status(200).send();
});

router.post('/payment', async (req, res) => {
  const { customerId, customerName, phoneNumber, email, orderAmount } = req.body;
  const orderId = await generateOrderId();
  const request = {
    order_amount: Number(orderAmount),
    order_currency: 'INR',
    order_id: orderId,
    customer_details: {
      customer_id: customerId,
      customer_phone: phoneNumber,
      customer_name: customerName,
      customer_email: email,
    },
  };

  try {
    const response = await cashfree.PGCreateOrder(request);
    res.json(response.data);
    res.status(200).send();
  } catch (error) {
    res.status(error.response.status || 500).send(error.response.data);
  }
});

router.post('/verify', async (req, res) => {
  try {
    const { order_id } = req.body;
    const response = await cashfree.PGOrderFetchPayments(order_id);
    res.json(response.data);
    res.status(200).send();
  } catch (error) {
    res.status(error?.response?.status || 500).send(error?.response?.data);
  }
});
