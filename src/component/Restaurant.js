import React, { useState } from "react";
import "./style.css"
import Menu from './menuApi'
import MenuCard from "./MenuCard";
import Navbar from "./Navbar";


const uniqueList = [... new Set(Menu.map((curElem)=>{   // this state contains "allCategoryArrayData" which is passed as prop to Navbar
    return curElem.category
})),
"All",
]

console.log(uniqueList)

const Restaurant = () => {

    const [menuData, setMenuData] = useState(Menu) // this state contains "allArrayData" of MapApi which is passed as prop to Card
    const [menuList, setMenuList] = useState(uniqueList)  // this state contains "allCategoryArrayData" which is passed as prop to Navbar

    const filterItem = (category)=>{      
        
        if(category==="All"){
          setMenuData(Menu)
          return;
        }

         const updatedList = Menu.filter((curElem)=>{    // this "updatedList" contains FilteredArrayData according to the Category
             return curElem.category=== category
         })

         setMenuData(updatedList)
    }
 
  return (
    <>
      <Navbar filterItem={filterItem} menuList={menuList}/>
      <MenuCard menuData={menuData}/>
    </>
  );
};

export default Restaurant;
