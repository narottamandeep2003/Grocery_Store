import React from 'react'
import ProductsItem from './ProductsItem'
import { useContext } from 'react'
import { UserContext } from '../Store'
export default function Product(props) {

  let store = useContext(UserContext)
  let newlist = []
  let oldList = useContext(UserContext)["list"];
  const list = (props.type === "Shop" ? newlist : oldList)

  return (
    <div className='Product' style={{ marginTop: props["Margin"].margin }} >
      {
        props.type === "Shop" ? (store.SearchcartList.map((ele) => {
          return <ProductsItem data={ele} key={ele.name} fulldata={ele}></ProductsItem>
        })) : (list.map((ele) => {
          // console.log(ele.name)
          return <ProductsItem data={ele} key={ele.name} fulldata={ele}></ProductsItem>
        }))

      }
    </div>
  )
}
