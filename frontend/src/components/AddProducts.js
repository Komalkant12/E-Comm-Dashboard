import React from 'react'

const AddProducts = () => {
  const [name, setName]= React.useState('');
  const [price, setPrice]=React.useState('');
  const [category, setCategory]=React.useState('');
  const [company, setCompany]=React.useState('');
  const [error, setError]= React.useState(false)

    const addProduct = async () => {

      console.warn(!name);
      if(!name || !price || !category || !company);
      {
        setError(true)
        return false;
      }
       
      // console.warn(name,price,category,company);
      const userId = JSON.parse(localStorage.getItem('user'))._id;
       let result =await fetch("http://localhost:5000/add-product",{
          method : 'post',
          body: JSON.stringify({name,price,category,company,userId}),
          headers:{
              "Content-Type":"application/json"
          }
       });
      result =await result.json();
      console.warn(result)
         
  }

  return (
    <div className='product' >
      <h1>Add product</h1>
      <input type="text" placeholder='Enter product name' className='inputBox'
      value={name} onChange={(e)=>{setName(e.target.value)}}/>
      {error && !name && <spam className="invalid-input">Enter Valid name</spam>}

      <input type="text" placeholder='Enter product price'  className='inputBox'
      value={price} onChange={(e)=>{setPrice(e.target.value)}}/>
      {error && !price && <spam className="invalid-input">Enter Valid name</spam>}

      <input type="text" placeholder='Enter product category'  className='inputBox'
      value={category} onChange={(e)=>{setCategory(e.target.value)}}/>
      {error && !category && <spam className="invalid-input">Enter Valid name</spam>}

      <input type="text" placeholder='Enter product company'  className='inputBox'
      value={company} onChange={(e)=>{setCompany(e.target.value)}}/>
      {error && !company && <spam className="invalid-input">Enter Valid name</spam>}
      
      <br></br>
      <button onClick={addProduct}>Add product</button>
    </div>
  )
}
export default AddProducts;
