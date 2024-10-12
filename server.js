const express = require("express");
const cors = require("cors");

const dotenv = require("dotenv");
const dbConnect = require("./config/database");

dotenv.config();
const app = express();
const PORT = process.env.PORT || 4000;

app.use(cors());
app.use(express.json());    

// Connect to database
dbConnect();

// Routes
const resourcesRoutes = require("./routes/eLearning");
const authRoutes = require("./routes/authRoutes");

app.use("/api/v1", resourcesRoutes);
app.use("/api/auth", authRoutes);

app.listen(PORT, () => {
  console.log(`App started successfully at ${PORT}`);
});
