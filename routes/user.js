const express = require('express');
const {createUser, getAllusers, getUser, replaceUser, updateUser, deleteUser} = require("../controller/user.js");
const userRouter = express.Router();


module.exports = userRouter;

userRouter
.post('/', createUser)
.get('/', getAllusers)
.get('/:id', getUser)
.put('/:id', replaceUser)
.patch('/:id', updateUser)
.delete('/:id', deleteUser);

// exports.productRouter = productRouter;