import React,{ useEffect} from "react";
import {useNavigate} from 'react-router-dom'

const Login = () => {
    const [password, setPassword] = React.useState('');
    const [email, setEmail] = React.useState('');
    const navigate = useNavigate(); //using navigate to back again in the page
    useEffect(()=>{
      const auth = localStorage.getItem('user');
      if(auth)
      {
          navigate('/')
      }
  })

    const handleLogin= async() => {
        console.warn("email","password",email,password)
        let result = await fetch('http://localhost:5000/login',{
          method :'post',
          body:JSON.stringify({email,password}),
          headers:{
            "Content-Type": "application/json",
          },
        });
        result= await result.json();
        console.warn(result)

        //for correct id
        if(result.name){
          localStorage.setItem("user",JSON.stringify(result));
           navigate('/')  
        }else{
          alert("please enter correct details")
        }
    } 

        return (
    <div className="login">
     
      <h2>LOGIN</h2>
      <form action="#" method="post" />

      <input type="email" className="email" value={email}
      onChange={(e)=>setEmail(e.target.value)}  placeholder="Enter Email" required/>

     <input type="password" className="password" value={password} 
        onChange={(e) => setPassword(e.target.value)} placeholder="Enter Password" required/>

      <button onClick={handleLogin} className="appButton" type="button">Login</button>
    </div>
  );
};

export default Login;
