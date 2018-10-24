import React from "react";

const ItemCard = props => {
  const { item, button_name, handleCardClick } = props;

  let itemType;

  return (
    <div className="ui column">
      <div
        className="ui card"
        key={item.id}

      >
        <div className="image">
          <img alt="oh no!" src={item.image_url} />
        </div>
        <div className="content">
          <div className="header">
            {item.name} {itemType}
          </div>

          <div className="meta text-wrap">
            <small>{item.discription}</small>
          </div>

          <div className="meta text-wrap">
            <small>{"cost: $" + item.cost + " per day"}</small>
          </div>
        </div>
        <button
          className="ui primary button"
          onClick={() => {handleCardClick(item)}}
        >
          {button_name}
        </button>

      </div>
    </div>
  );

};

export default ItemCard;
