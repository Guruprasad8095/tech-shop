import React from 'react'
import Home from '../component/Home'
// import Product from '../component/Product'
import { Route,Routes } from 'react-router-dom'
import ProductDetail from '../component/ProductDetail'
import Footer from '../component/Footer'
import Loginform from '../component/Loginform'
import Signup from '../component/Signup'
// import FeatureProducts from '../component/FeatureProducts'
// import { Routes } from 'react-router-dom'


 const Routings = () => {
 
   return (
   <Routes>
    {/* <Route path='/Featureproducts' element={<FeatureProducts/>}/> */}
    <Route path='/' element={<Home/>}/>
    <Route path='/Productdetail/:id' element={<ProductDetail/>}/>
    <Route path='/footer' element={<Footer/>}/>
    <Route path='/loginform' element={<Loginform/>}/>
    <Route path='/signup' element={<Signup/>}/>
   </Routes>
  )
 }


export default Routings