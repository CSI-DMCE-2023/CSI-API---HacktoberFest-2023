const express = require("express");
const router = express.Router();
const Products = require("../Products.json");

// router.get("/", (req, res) => {
//   res.send(Products);
// });
router.get("/category", async (req, res) => {
  const categories = Products.map((product) => product.category);
  const allCategories = [...new Set(categories)];
  res.send(allCategories);
});


router.get('/categories/:category',(req,res)=>{
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
