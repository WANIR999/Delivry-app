import React from 'react';
import "./App.css"
import "react-toastify/dist/ReactToastify.css";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from './components/Register';
import Login from './components/Login';
import Foget_password from './components/Forget_password';
import Reset_password from './components/Reset_password';
import Error from './components/Errorpath';
import Client from './components/Client';
import Home from './components/Home'; 
import Plats from './components/PlatsPage';
import Dashboard from './components/Dashboard';
import Logout from './components/logout';
import Navbar from './components/Navbar';
import Private from './privateroutes_component.js/Privateroutes';
import NoauthRoutes from './privateroutes_component.js/NoauthRoutes';
import ClientRoutes from './privateroutes_component.js/clientPrivateRoutes';
import LivreurRoutes from './privateroutes_component.js/livreurRoutes';
import ManagerRoutes from './privateroutes_component.js/managerRoutes';
import Forget_pass_confirm from './components/Forget_pass_confirm';
import Achat from './components/Livreur'
import LivreurAdd from './components/LivreurAdd';
import CatAdd from './components/CategorieAdd';
import CategoriesList from './components/Catdisplay';
import PaymentList from './components/Paymendisplay';
import SideBar from './components/SideBar';
import Addplat from './components/Addplat';
import Cart from './components/Cart';
import Header from './components/header';
import Product from './components/Products';
import { ToastContainer } from "react-toastify";
import CheckoutSuccess from './components/CheckoutSuccess';




function App() {
  return (
    <Router>
      <ToastContainer />
      <Routes>
        {/* auth routes */}
        <Route element={<Private/>}>


        <Route path='auth' element={<Navbar/>}>
        <Route path=':role/resetpassword' element={<Reset_password/>}/>
        <Route path=':role/logout' element={<Logout/>}/>
        </Route>

            {/* client routes */}
        <Route element={<ClientRoutes/>}>

        <Route path='auth' element={<Navbar/>}>
        <Route path='cart' element={<Cart/>}/>
        <Route path='checkout-success' element={<CheckoutSuccess/>}/>
        <Route path='product' element={<Product/>}/>
        <Route path='client/home' element={<Plats/>}/>
        </Route>

        </Route>

           {/* livreur routes */}
        <Route element={<LivreurRoutes/>}>

        <Route path='auth' element={<Navbar/>}>
        <Route path='livreur/home' element={<Achat/>}/>
        </Route>

        </Route>

          {/* manager routes */}
        <Route element={<ManagerRoutes/>}>
        <Route path='auth' element={<Navbar/>}>
        <Route path='manager/home' element={<Home/>}/>
        <Route path='manager/users' element={<Dashboard/>}/>
        <Route path='manager/livreur/add' element={<LivreurAdd/>}/>
        <Route path='manager/categorie/add' element={<CatAdd/>}/>
        <Route path='manager/categorie/list' element={<CategoriesList/>}/>
        <Route path='manager/payment/list' element={<PaymentList/>}/>
        <Route path='manager/plat/add' element={<Addplat/>}/>
        </Route>
        
        </Route>
        </Route>
 

              {/* No authentication routes */}
        <Route element={<NoauthRoutes/>}> 
        <Route path='Register' element={<Register/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='/' element={<Login/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='forgetpassword' element={<Foget_password/>}/>
        <Route path='forget_password_confirmation/:token' element={<Forget_pass_confirm/>}/>
        <Route path='noauth' element={<Header/>}>
       <Route path='Home' element={<Home/>}/>
       

       {/* <Route path='Footer' element={<Footer/>}/> */}
       </Route>
       </Route>

   
             {/* global route */}
       <Route path='accessdenied' element={<Error/>}/>
       <Route path='*' element={<Error/>}/>
      </Routes>
    </Router>


  );
}

export default App;
