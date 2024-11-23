//require for servers, import for client (generally)
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000; //letters?

const whitelist = ['https://www.mybudgetree.com', 'http://localhost:5173/']
const corsOptions = {
  origin: function (origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true)
    } else {
      callback(new Error('Not allowed by CORS'))
    }
  }
}

// var corsOptions = {
//   origin: 'https://mybudgetree.com',
//   optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
// }

app.get(`/`, cors(corsOptions), (req, res) => {
  res.send({
    hello: 'hello world',
    // response: res,
    // request: req,
  })
})


app.listen(PORT, () => {
  console.log(`Port ${PORT} is listening...`);
  //other console logs might be here, such as log framework or DB)
})