import React, { useEffect, useState } from 'react'
import ProductsItem from './ProductsItem'
import { useContext } from 'react'
import { UserContext } from '../Store'
export default function Product(props) {
  const SearchcartList=useContext(UserContext).SearchcartList
  const [product, setProduct]=useState([]);
  useEffect(()=>{
    fetch(process.env.REACT_APP_API_KEY + "getProducts").then((res)=>{
      return res.json();
    }).then((data)=>{
      if(data.status){
        setProduct(data.products)
      }
    })
  },[])
  return (
    <div className='Product' style={{ marginTop: props["Margin"].margin }} >
      {
        props.type === "Shop" ? (SearchcartList.map((ele) => {
          return <ProductsItem data={ele} key={ele.name} fulldata={ele}></ProductsItem>
        })) : (product.map((ele) => {
          // console.log(ele.name)
          return <ProductsItem data={ele} key={ele.name} fulldata={ele}></ProductsItem>
        }))

      }
    </div>
  )
}
