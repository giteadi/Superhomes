const express = require('express');
const cors = require('cors');
const app = express();
require("dotenv").config();
const fileUpload = require('express-fileupload');
const userRoutes = require("./Routes/userRoutes"); 
const adminRoutes = require("./Routes/adminRoute"); 
const cloudinaryConnect=require("./Config/cloudinary")
cloudinaryConnect();

// Middlewares
app.use(express.json());
app.use(cors());
// app.use(fileUpload());
app.use(fileUpload({
  useTempFiles: true,
  tempFileDir: '/tmp/'
}));


// User routes
app.use("/api/v1/user", userRoutes);

// Admin routes
app.use("/api/v1/admin", adminRoutes); // Uncommented to activate admin routes

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server started on port ${PORT}`);
});
