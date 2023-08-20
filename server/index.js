require('dotenv').config();

const express = require('express');

const app = express();
const cors = require('cors');
app.use(cors({origin:true,credentials: true}));
app.use(cors());
app.use(express.json());

const paypal = require('@paypal/checkout-server-sdk');
const clientId = process.env.PAYPAL_CLIENT_ID;
const clientSecret = process.env.PAYPAL_CLIENT_SECRET;

const environment = new paypal.core.SandboxEnvironment(clientId, clientSecret);
const client = new paypal.core.PayPalHttpClient(environment);

const storeItems = new Map([
  [1, { priceInCents: 1000, name: 'Music Title' }],
  [2, { priceInCents: 1000, name: 'Music Title' }],
]);

app.post('/create-paypal-transaction', async (req, res) => {
  const { items } = req.body;

  const request = new paypal.orders.OrdersCreateRequest();
  request.requestBody({
    intent: 'CAPTURE',
    purchase_units: [
      {
        amount: {
          currency_code: 'USD',
          value: (items.reduce((total, item) => total + storeItems.get(item.id).priceInCents * item.quantity, 0) / 100).toFixed(2),
        },
      },
    ],
    application_context: {
        return_url: 'https://shinky.netlify.app/return', // Replace with your actual return URL
        cancel_url: 'https://shinky.netlify.app/cancel', // Replace with your actual cancel URL
      },
  });

  try {
    const response = await client.execute(request);
    res.json({ orderId: response.result.id });
  } catch (error) {
    console.error('Error creating PayPal transaction:', error);
    res.status(500).json({ error: 'Unable to create PayPal transaction' });
  }
});

app.get('/process-paypal-payment', async (req, res) => {
  const { token, payerId } = req.query;

  const request = new paypal.orders.OrdersCaptureRequest(token);
  request.requestBody({
    payer_id: payerId,
  });
  try {
    const response = await client.execute(request);
    // Payment is successfully processed on PayPal's end
    res.send('Payment successful!'); // Or you can redirect to a success page
  } catch (error) {
    console.error('Error processing PayPal payment:', error);
    res.status(500).json({ error: 'Unable to process PayPal payment' });
  }
});

app.listen(8000, () => {
  console.log('Server is listening on port 8000');
});