const express = require("express");
const fs = require("fs");
const path = require("path");
const router = express.Router();

const dataPath = path.join(__dirname, "../data/employees.json");

function getEmployees() {
  const data = fs.readFileSync(dataPath);
  return JSON.parse(data);
}

router.post("/login", (req, res) => {
  const { username, password } = req.body;
  const employees = getEmployees();
  const user = employees.find(emp => emp.username === username && emp.password === password);
  if (!user) return res.status(401).json({ message: "Invalid credentials" });
  res.json({ user });
});

router.get("/", (req, res) => {
  const employees = getEmployees();
  res.json(employees);
});

module.exports = router;