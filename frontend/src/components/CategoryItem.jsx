import React from 'react'

export default function CategoryItem(props) {
    return (
        <div className="cItem">
          <img src={props.imgUrl} alt="..." className='CImg' />
          <span>{props.title}</span>
        </div>
    )
}
