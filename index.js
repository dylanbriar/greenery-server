//require for servers, import for client (generally)
const express = require('express');
const app = express();
const cors = require('cors');
const PORT = 3000; //letters?

const corsOptions = {
  origin: 'www.budgetree.com',
  optionsSuccessStatus: 200,
}

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