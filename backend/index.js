const express = require("express");
const cors = require("cors"); //to resolve "fail to fetch"
require("./db/config")
const User  = require("./db/User");
const Product = require("./db/Products")
const app = express();

app.use(express.json())
app.use(cors());

// post request for register
app.post("/register",async (req,resp) => {  //async function use krtay hai promise return krne k liye
     let user = new User(req.body); //req bhej diya
     let result =await user.save();
     result = result.toObject();
     delete result.password;
     resp.send(result)  //respose send kr raha hai
})

// post request for login
  app.post("/login",async (req,resp)=>{
     console.log(req.body)
     if (req.body.password && req.body.email){
     let user = await User.findOne(req.body).select("-password")
     if(user) {
          resp.send(user)
     }else{
          resp.send({result: 'No user found' })
     }
  } else{
          resp.send({result: 'No user found' })
  }
})

//post request to add the product
app.post("/add-product",async (req,resp)=>{
     let product = new Product(req.body);
     let  result = await product.save();
     resp.send(result)
})

// get method add-products
app.get("/products",async (req,resp)=>{
    
     let products= await Product.find();
     if(products.length>0){
          resp.send(products)
     }else{
          resp.send({result:"No products found"})
     }
})

//api for apply to perform delete method
app.delete("/product/:id",async(req, resp) => {
     
     const result =await Product.deleteOne({_id:req.params.id})
     resp.send(result)
});

//get method for find product id to update product
app.get("/product/:id",async(req, resp) => {
     let result = await Product.findOne({_id:req.params.id})
     if(result){
          resp.send(result)
     }else{
          resp.send({result:"NO result found"})
     }
})

// put method to perform updation product
app.put("/product/:id",async(req, resp) => {
     let result = await Product.updateOne(
          {_id: req.params.id},
     {
       $set : req.body
     }
     )
     resp.send(result)
})

// get mothod fo perform search

app.get("/search/:key", async (req,resp)=>{
     let result = await Product.find({
          "$or": [
               {name: {$regex: req.params.key}},
               {company: {$regex: req.params.key}},
               {category: {$regex: req.params.key}}

          ]
     });
     resp.send(result)
})


app.listen(5000);