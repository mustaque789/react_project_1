import React, { useState } from "react";
import "./style.css"
import Menu from './menuApi'
import MenuCard from "./MenuCard";


const uniqueList = [... new Set(Menu.map((curElem)=>{
    return curElem.category
}))]

console.log(uniqueList)

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu)

    const filterItem = (category)=>{
         const updatedList = Menu.filter((curElem)=>{
             return curElem.category=== category
         })

         setMenuData(updatedList)
    }
 
  return (
    <>

    <nav className="navbar">
        <div className="btn-group">
            <button className="btn-group__item" onClick={()=>filterItem("breakfast")}>Breakfast</button>
            <button className="btn-group__item" onClick={()=>filterItem("lunch")}>Lunch</button>
            <button className="btn-group__item" onClick={()=>filterItem("evening")}>Evening</button>
            <button className="btn-group__item" onClick={()=>filterItem("dinner")}>Dinner</button>
            <button className="btn-group__item" onClick={()=> setMenuData(Menu)}>All</button>
        </div>
    </nav>

      <MenuCard menuData={menuData}/>
    </>
  );
};

export default Restaurant;
