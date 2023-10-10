const express = require("express");
const router = express.Router();
const Products = require("../Products.json");

router.get("/products", (req, res) => {
  res.send(Products);
});


router.get('/products/categories/:category',(req,res)=>{
  const category=req.params.category;
  let result=[];
  Products.map(a => {
    if(a.category===category)
      return result.push(a);
  });
  if(result.length !== 0){
    res.send(result);
  }else{
    res.status(404).send("Category Not Found");
  }
})


module.exports = router;
