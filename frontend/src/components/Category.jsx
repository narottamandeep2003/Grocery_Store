import React from 'react'
import CategoryItem from './CategoryItem'

export default function Category() {
  return (
    <div className='Category'>
      <h3 className='Cheading'>Category</h3>
      <div className="CategoryList">
      
        <CategoryItem imgUrl="./dairy.jpg" title="Dairy"></CategoryItem>
        <CategoryItem imgUrl="./Drinks.jpg" title="Drinks"></CategoryItem>
        <CategoryItem imgUrl="./fruits.jpg" title="Fruits"></CategoryItem>
        <CategoryItem imgUrl="./household.jpg" title="Household"></CategoryItem>
       
      </div>
      <div className="CategoryList">
      
        <CategoryItem imgUrl="./personalCare.jpg" title="Personal Care"></CategoryItem>
        <CategoryItem imgUrl="./Petcare.jpg" title="Pet Care"></CategoryItem>
        <CategoryItem imgUrl="./snacks.jpg" title="Snacks"></CategoryItem>
        <CategoryItem imgUrl="./vegetables.jpg" title="Vegetable"></CategoryItem>
       
      </div>
    </div>
  )
}
