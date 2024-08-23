const express = require("express");
const dotenv = require("dotenv");
const app = express();
const path = require("path");
const cors=require('cors');

const connectDatabase= require('./config/connectDatabase')

// Load environment variables from .env file
dotenv.config({ path: path.join(__dirname, "config", "config.env") });

const products=require('./routes/product')
const orders=require('./routes/order')
// 
connectDatabase();
app.use(express.json())
app.use(cors());
app.use('/api/v1/',products);
app.use('/api/v1/',orders);

// Log the environment variables to verify they are loaded
console.log("PORT:", process.env.PORT);
console.log("NODE_ENV:", process.env.NODE_ENV);

app.listen(process.env.PORT, () => {
    console.log(`Server listening on port ${process.env.PORT} in ${process.env.NODE_ENV}`);
});
