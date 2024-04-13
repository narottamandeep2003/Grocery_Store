import React, { useContext, useState } from 'react'
import { UserContext } from '../Store'

export default function CartItem(props) {
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

        if (val + 1 <= props.data.stock) {
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
        }
    }
    return (
        <div className="CartItem">
            <div className="CartItemLeft">
                <img src={props.data.imgUrl} alt="..." className='CartImg' />
            </div>
            <div className="CartItemRight">
                <h1>{props.data.name}</h1>
                <p className='CartDisc'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Enim a reprehenderit porro suscipit quam et sint in. Corrupti aliquid mollitia atque ducimus nobis praesentium voluptate vero veritatis cumque inventore? Rerum!</p>
                <p className='CartPrice'>{props.data.text}<span> Rs.{props.data.price}</span></p>
                <div className="CartAdd">
                    <button className='Cartl'
                        onClick={handleL}
                    >-</button><button className='Cartm'>{val}</button><button className='Cartr' onClick={handleR}>+</button>
                </div>
                <span className='CartDel'>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash-fill" viewBox="0 0 16 16">
                        <path d="M2.5 1a1 1 0 0 0-1 1v1a1 1 0 0 0 1 1H3v9a2 2 0 0 0 2 2h6a2 2 0 0 0 2-2V4h.5a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1H2.5zm3 4a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 .5-.5zM8 5a.5.5 0 0 1 .5.5v7a.5.5 0 0 1-1 0v-7A.5.5 0 0 1 8 5zm3 .5v7a.5.5 0 0 1-1 0v-7a.5.5 0 0 1 1 0z" />
                    </svg>
                </span>
            </div>
        </div>
    )
}
