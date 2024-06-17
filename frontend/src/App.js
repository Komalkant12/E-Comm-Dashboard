
import { BrowserRouter,  Route ,Routes } from 'react-router-dom';
import './App.css';
import Nav from './components/Nav';
import Footer from './components/Footer';
import SignUp from './components/SignUp';
import PrivateComponent from './components/PrivateComponent';
import Login from './components/Login';
import AddProducts from './components/AddProducts';
import ProductList from './components/ProductList';
import UpdateProduct from './components/UpdateProduct'; 

function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Nav/>

    <Routes>
       <Route element ={<PrivateComponent/>}>
      <Route path="/" element={<ProductList/>}/>
      <Route path="/add" element={<AddProducts/>}/>
      <Route path="/update/:id" element={<UpdateProduct/>}/>
      <Route path="/logout" element={<h1>Logout Component</h1>}/>
      <Route path="/profile" element={<h1>Profile Component</h1>}/>
      </Route>

      <Route path="/signUp" element={<SignUp/>}/>
      <Route path="/login" element={<Login/>}/>
      
      </Routes>
    </BrowserRouter>
    <Footer/>
    </div>
  );
}

export default App;
