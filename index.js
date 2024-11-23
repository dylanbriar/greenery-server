//require for servers, import for client (generally)
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = process.env.PORT || 3000;

const whitelist = ['https://www.mybudgetree.com', 'http://localhost:5173']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      console.log('Blocked origin:', origin)
      callback(new Error('Not allowed by CORS'))
    }
  },
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'], // Specify allowed methods
  allowedHeaders: ['Content-Type', 'Authorization'], // Specify allowed headers
  credentials: true
}

// var corsOptions = {
//   origin: 'https://mybudgetree.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.use(cors(corsOptions))

app.get(`/`, (req, res) => {
  res.send({
    hello: 'hello world',
    // response: res,
    // request: req,
  })
})

app.use((err, req, res, next) => {
  if (err.message === 'Not allowed by CORS') {
    res.status(403).json({
      error: 'CORS Error',
      message: 'Origin not allowed',
      origin: req.headers.origin
    });
  } else {
    next(err);
  }
});

app.listen(PORT, () => {
  console.log(`Port ${PORT} is listening...`);
  //other console logs might be here, such as log framework or DB)
})