import './CSS/Home.css'
import './CSS/NavBar.css';
import './CSS/Shop.css';
import './CSS/Cart.css';
import './CSS/Login.css';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Shop from './components/Shop';
import './App.css'

import { UserContext } from './Store';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Cart from './components/Cart';
import Login from './components/Login';
import SignUp from './components/SignUp';
import Payment from './components/Payment';
import { useEffect, useState } from 'react';

function App() {
  const [hash,setHash]=useState(new Map());
  const [cartList,setcartList]=useState([])
  let set=new Set();
  set.add("All")
  const [login,setLogin]=useState(false);
  const [searchList,setsearchList]=useState(set)
  const [SearchcartList,setSearchcartList]=useState([])
  const [cartDetail,setCartDetail]=useState({"subcost":0,"discount":0,"tax":0,"total":0});
  useEffect(()=>{
    let user=localStorage.getItem("user")
    if(user){
      setLogin(true)
    }
  },[])
  return (
    <> 
    <UserContext.Provider  value={{cartList,setcartList,cartDetail,setCartDetail,hash,setHash,searchList,setsearchList,SearchcartList,setSearchcartList,login:login,setLogin:setLogin}}>
      <BrowserRouter>
        <NavBar></NavBar>
        <Routes>
          <Route path='/' element={<Home ></Home>} />
          <Route path='/Shop' element={<Shop></Shop>} />
          <Route path='/Cart' element={<Cart></Cart>} />
          <Route path='/Login' element={<Login></Login>} />
          <Route path='/SignUp' element={<SignUp></SignUp>} />
          <Route path='/Payment' element={<Payment></Payment>} />
        </Routes>
      </BrowserRouter>
    </UserContext.Provider>
    </>
  );
}

export default App;
