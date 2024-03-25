import React from "react";


const MenuCard = ({ menuData }) => {
  return (
    <>
    <section className="main-card--cointainer">
      {menuData.map((curElem) => {
        return (
          <div className="card-container" key={curElem.id}>
            <div className="card">
              <div className="card-body">
                <span className="card-number card-circle subtle">{curElem.id}</span>
                <span className="card-author subtle">{curElem.name}</span>
                <h1 className="card-title">{curElem.name}</h1>
                <span className="card-description subtle">
                {curElem.description}
                </span>
                <div className="card-read">Read</div>
                // <img src={curElem.image} alt="image"/>
                <span className="">Order Now</span>
              </div>
            </div>
          </div>
        );
      })}
      </section>
    </>
  );
};

export default MenuCard;
