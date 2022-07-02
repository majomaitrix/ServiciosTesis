const express = require("express");
const router = express.Router();
const usersService = require('./../services/usersService');
const service = new usersService();

router.get('/list-users',async (req,res)=>{
  const products = await service.find();
  res.json(products);
})

module.exports = router;
