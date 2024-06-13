import React from 'react'
import { Link, useNavigate } from "react-router-dom";

const Nav = () => {
  const auth = localStorage.getItem("user");
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate("/signup");
  };
  return (
    <div >
           <img  alt="logo" className="logo"
         src="https://cdn.dribbble.com/users/3958478/screenshots/8460263/media/1b06c1712c0323efcfbecd73a3193db5.png?resize=400x300&vertical=center"/>
      
     {auth ?    <ul className="nav-ul">
          <li>
            <Link to="/">PRODUCTS</Link>
          </li>
          <li>
            <Link to="/add">ADD PRODUCTS</Link>
          </li>
          <li>
            <Link to="/update">UPDATE PRODUCTS</Link>
          </li>
          <li>
            <Link to="/profile">PROFILE</Link>
          </li>
          <li><Link onClick={logout} to = "/signup" >LOGOUT({JSON.parse(auth).name})</Link></li>
          </ul>
          : 
          <ul className="nav-ul nav-right">
             <li> <Link to="/signup">SIGNUP</Link></li>
          <li><Link to="/login">LOGIN</Link> </li>
          </ul>
          }
    </div>
  )
  }
  export default Nav;