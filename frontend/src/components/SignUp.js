import React, { useState, useEffect } from "react";
import{Link, useNavigate} from 'react-router-dom';

const SingUp = () => {
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const navigate = useNavigate();


  useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth)
      {
          navigate('/')
      }
  })

  const collectData = async () => {
    console.warn(name, email, password);
    //passing 1st parameter
    let result = await fetch("http://localhost:5000/register", {
      method: 'post',
      body: JSON.stringify({ name, email, password }),
      headers: {
        "Content-Type": "application/json",
      },
    });
  result = await result.json();
    console.warn(result);
    
      localStorage.setItem("user",JSON.stringify(result));
      navigate('/')
 
    
   };

  return (
    <div>
      <h3>please go to the login page</h3>
    <div className="signup">
      <h1>REGISTER</h1>
      <input
        type="text"
        name="username"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Enter Username"
        required
      />

      <input
        type="email"
        name="email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="Enter Email"
        required
      />

      <input
        type="password"
        name="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder="Enter Password"
        required
      /> <br></br>

      <button onClick={collectData} type="submit">
        Sign Up
      </button>

      <p className="foot">
      Already have an account?
      <Link to="/login"> 
       LOGIN
       </Link>
      </p>
    </div>
    </div>
  );
};

export default SingUp;
