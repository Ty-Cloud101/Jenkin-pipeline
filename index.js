const express = require("express");
const app = express();

// GET /
app.get("/", (req, res) => {
  res.send("Webhook Test");
});

// GET /users
app.get("/users", (req, res) => {
  res.json({ message: "Users API working" });
});

// Task 14: Add POST, PUT, DELETE example APIs

// POST /users
app.post("/users", (req, res) => {
  res.json({ message: "POST request received" });
});

// PUT /users/:id
app.put("/users/:id", (req, res) => {
  res.json({ message: `PUT request received for user ${req.params.id}` });
});

// DELETE /users/:id
app.delete("/users/:id", (req, res) => {
  res.json({ message: `DELETE request received for user ${req.params.id}` });
});

// Listen on all interfaces
app.listen(3000, '0.0.0.0', () => {
  console.log("Server running on port 3000");
});