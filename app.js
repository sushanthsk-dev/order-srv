const express = require('express');
const app = express();

app.get("rest/v1/orders", (req,res) => {
  res.status(200).json([{
    orderId: "10344",
    address: "Bangalore Karnataka"
  },{
    orderId: "34995",
    address: "Dharwad Karnataka"
  }])
});

app.listen(8080, () => {
  console.log("Server listening on the port 808")
});