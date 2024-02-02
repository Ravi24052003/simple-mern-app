require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const productRouter = require("./routes/product.js");
const userRouter = require("./routes/user.js");
const cors = require("cors");
const path = require("path");

const server = express();

//db connection
main().catch(err => console.log(err));
async function main() {
  await mongoose.connect(process.env.MONGO_URL);
  console.log('database connected'); 
}




server.use(cors());
server.use(express.json());  
server.use(morgan('default')); 
server.use(express.static(path.resolve(__dirname, process.env.DIST_DIR)));
server.use('/products', productRouter); 
server.use("/users", userRouter);
server.use("*", (req, res)=>{
  res.sendFile(path.resolve(__dirname, 'dist', 'index.html' ));
});










server.listen(process.env.PORT, ()=>{
    console.log('server started');
});