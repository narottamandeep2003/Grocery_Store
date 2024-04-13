import React from 'react'

export default function Filter() {
  const FilterList = ["All", "Dairy", "Fruit", "Household", "Snacks", "Vegetable"]
  return (
    <div className="ShopPageFirstSection">

      <div className="FilterHead">
        <div className="FilterFirst">
          <span className='FilterFirstSvg'>
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-list-task" viewBox="0 0 16 16">
              <path fillRule="evenodd" d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z" />
              <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
              <path fillRule="evenodd" d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z" />
            </svg>
          </span>
          <span className='FilterTitle'>
            Filters
          </span>
        </div>
        <button className='FilterBtn'>Reset All</button>
      </div>
      <div className="Break"></div>
      <div className="FilterList">
        <span className='FilterListCat'>catagory</span>
        <div className='innerFilterList'>
          {FilterList.map((ele) => {
            return <div className="FilterItem">
              <input type="checkbox" name="" id={ele} />
              <label htmlFor={ele}> {ele}</label>
            </div>
          })}
        </div>
      </div>
    </div>
  )
}
