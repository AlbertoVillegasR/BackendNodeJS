import express from "express";
import apps from './app';
require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;
app.use(apps)
app.listen(PORT, () => {
    console.clear();
    console.log("Server starting in port:", PORT)
})