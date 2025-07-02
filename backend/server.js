const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const employeeRoutes = require("./routes/employeeRoutes");

const app = express();
app.use(cors());
app.use(express.json());

app.use("/api/employees", employeeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, '0.0.0.0', () => {
  console.log("✅ Server running on port", PORT);
});
