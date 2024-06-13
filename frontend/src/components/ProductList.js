import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';

const ProductList = () =>{
  const [products, setProducts]= useState([]);

  useEffect(() => {
          getProducts();
  }, [])

  const getProducts = async () => {
       let result =await fetch('http://localhost:5000/products')
       result = await result.json();
       setProducts(result);
  
  }

  const deleteProduct=async(id)=>{
    let result =await fetch(`http://localhost:5000/product/${id}`,{
        method:"Delete"
    })
      result = await result.json()
      if(result){
        alert("record is deleted")
        getProducts()  //to show detele
      }
  };

  const searchHandle = async(event) =>{
    let key = event.target.value;
    if(key){
    let result = await fetch(`http://localhost:5000/search/${key}`);
    result = await result.json();
    if (result){
      setProducts(result)
    }
  }else{
    getProducts()
  }
  }
   
    return (
      <div className='product_list'>
        <h2>Product List</h2>
        <input type="text" placeholder='search product'
        onChange={searchHandle}
        />
        <ul >
         <li>S.NO</li>   
         <li>Name</li> 
         <li>Price</li> 
         <li>Category</li> 
         <li>Operation</li>
        </ul>
        {
           products.length>0 ? products.map((item,index)=>
            <ul key ={item._id}>
                <li>{index+1}</li>
                <li>{item.name}</li>
                <li>{item.price}</li>
                <li>{item.category}</li>
               <li> <button className='button' onClick={()=>deleteProduct(item._id)}>DELETE</button>
            <Link to={"/update/"+item._id}>UPDATE</Link></li>
               
            </ul>
            )
            : <h1>NO RESULT FOUND</h1>
        }
      </div>
    )
  }
  export default  ProductList;
