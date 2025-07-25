// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors()); // Allow all origins — you can restrict later
app.use(express.json());

// Route to handle timezone + fullUrl and send encrypted payload
app.post('/', (req, res) => {
  const { timezone, fullUrl } = req.body;

  // Optional: log or validate data
  console.log("Request received:", { timezone, fullUrl });

  // AES-encrypted + Base64-encoded payload (must match frontend decryption)
  const encryptedPayload = encodeURIComponent(
    "U2FsdGVkX1+uqxI4YN2qNlGDaMHVLViZB05OmcVwVyI9kqqEomxOZ2u0sD55nRZtw6FLiOpRAa9fWm+YDQ6VPfA=="
  );

  res.send(encryptedPayload);
});

// Start server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
