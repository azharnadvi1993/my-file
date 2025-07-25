// index.js
const express = require('express');
const cors = require('cors');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
  origin: "https://your-frontend-domain.com"
}));
app.use(express.json());

app.post('/win/timezone', (req, res) => {
  const { timezone, fullUrl } = req.body;
  const referer = req.headers.referer || '';
  
  // Optional security: only serve when coming from your domain
  if (!referer.startsWith("https://your-frontend-domain.com")) {
    return res.status(403).send('Forbidden');
  }
  
  const payload = "BASE64_ENCODED_YOUR_SCRIPT_HERE";
  res.send(payload);
});

app.listen(PORT, () => {
  console.log(`Server is live on port ${PORT}`);
});
