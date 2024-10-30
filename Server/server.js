const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();

const userRoutes = require("./Routes/userRoutes"); 
// const adminRoutes = require("./Routes/adminRoute"); 

// Middlewares
app.use(express.json());
app.use(cors());

// User routes
app.use("/api/v1/", userRoutes);

// Admin routes
// app.use("/api/v1/admin", adminRoutes); 

const PORT = process.env.PORT || 3000; 

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});