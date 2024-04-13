import React, { useContext, useState } from 'react'
import { UserContext } from '../Store'


export default function ProductsItem(props) {
    const store = useContext(UserContext)
    const [val, setVal] = useState(store.hash.has(props.data.name) ? store.hash.get(props.data.name) : 0)
    const handleL = () => {
        if (val !== 0) {
            if (store.cartList.some((e) => {
                return (e.name === props.data.name) && e["itemCount"] === 1
            })) {
                let cost = { "subcost": 0, "discount": 0, "tax": 0, "total": 0 }
                let temphash = store.hash;
                let temp = store.cartList.filter((e) => {
                    if (e.name === props.data.name) {
                        
                        temphash.set(props.data.name, 0)
                       
                        return false;
                    }
                    else {
                        cost.subcost = cost.subcost + e["itemCount"] * e.price;
                        cost.total = cost.total + e["itemCount"] * e.price;
                        return true;
                    }
                })
                store.setHash(temphash)
                store.setCartDetail(cost)
                store.setcartList(temp)
                setVal(temphash.get(props.data.name))
            }
            else {
                let cost = { "subcost": 0, "discount": 0, "tax": 0, "total": 0 }
                let temphash = store.hash;
                let temp = store.cartList.map((e) => {
                    if (e.name === props.data.name) {

                        let obj = e
                        obj["itemCount"] = obj["itemCount"] - 1;
                        cost.subcost = cost.subcost + obj["itemCount"] * e.price;
                        cost.total = cost.total + obj["itemCount"] * e.price;
                     
                        temphash.set(props.data.name, obj["itemCount"])
                       
                        return obj
                    }
                    else {
                        cost.subcost = cost.subcost + e["itemCount"] * e.price;
                        cost.total = cost.total + e["itemCount"] * e.price;
                        return e;
                    }
                })
                store.setHash(temphash)
                store.setCartDetail(cost)
                store.setcartList(temp)
                setVal(temphash.get(props.data.name))
            }
           
        }
    }
    const handleR = () => {

        if (val + 1 <= props.fulldata.stock) {
            if (store.cartList.some((e) => {
                return e.name === props.data.name
            })) {
                let cost = { "subcost": 0, "discount": 0, "tax": 0, "total": 0 }
                let temphash = store.hash;
                let temp = store.cartList.map((e) => {
                    if (e.name === props.data.name) {

                        let obj = e
                        obj["itemCount"] = obj["itemCount"] + 1;
                        cost.subcost = cost.subcost + obj["itemCount"] * e.price;
                        cost.total = cost.total + obj["itemCount"] * e.price;
                       
                        temphash.set(props.data.name, obj["itemCount"])
                        
                        return obj
                    }
                    else {
                        cost.subcost = cost.subcost + e["itemCount"] * e.price;
                        cost.total = cost.total + e["itemCount"] * e.price;
                        return e;
                    }
                })
                store.setHash(temphash)
                setVal(temphash.get(props.data.name))
                store.setCartDetail(cost)
                store.setcartList(temp)
            }
            else {
                let cost = store.cartDetail
                let obj = props.fulldata
                obj["itemCount"] = 1;
                cost.subcost = cost.subcost + obj.price
                cost.total = cost.total + obj.price
                let temphash = store.hash;
                temphash.set(props.data.name, 1)
                store.setHash(temphash)
                store.setCartDetail(cost)
                store.setcartList([...store.cartList, obj])
                setVal(temphash.get(props.data.name))

            }

            // console.log(store.cartDetail)

        }
    }
    return (
        <div className="ProductsItemBox">
            <div className='ProductsItem'>
                <div className="ProductImgSec">
                    <img src={props.data.imgUrl} alt="..." className='ProductImg' />
                </div>
                <div className="ProductBody">
                    <h1>{props.data.name}</h1>
                    <p>{props.data.text}<span className='ProductRs'> Rs.{props.data.price}</span></p>
                    <div className="ProductPrice">
                        <div className="ProductAdd">
                            <button className='Productl' onClick={handleL} >-</button><button className='Productm'>{val}</button><button className='Productr' onClick={handleR}>+</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
