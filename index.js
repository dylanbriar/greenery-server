//require for servers, import for client (generally)
const express = require('express');
const app = express();
const PORT = 3000; //letters?

app.get(`/`, (req, res) => {
  res.send({
    hello: 'hello world',
  })
})


app.listen(PORT, () => {
  console.log(`Port ${PORT} is listening...`);
  //other console logs might be here, such as log framework or DB)
})