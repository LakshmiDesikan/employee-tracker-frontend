const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);

const PORT = 5000;
app.listen(PORT, () => {
  console.log("✅ Server running on port", PORT);
});