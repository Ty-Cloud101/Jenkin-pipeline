const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Webhook Test");
});

app.get("/users", (req, res) => {
  res.json({ message: "Users API working" });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});

res.send("API updated from webhook test");