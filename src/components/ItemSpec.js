import React from "react";

const ItemSpec = props => {
  let { item, handleCardClick, removeCardClick, buttonName } = props;

  let itemType;
  console.log(props)

  switch (item.item_class) {
    case "Assault":
      itemType = <i className="icon large circular military" />;
      break;
    case "Defender":
      itemType = <i className="icon large circular shield" />;
      break;
    case "Support":
      itemType = <i className="icon large circular ambulance" />;
      break;
    default:
      itemType = <div />;
  }

  return (
    <div className="ui segment">
      <div className="ui two column centered grid">
        <div className="row">
          <div className="four wide column">
            <img
              alt="oh no!"
              className="ui medium circular image bordered"
              src={item.image_url}
            />
          </div>
          <div className="four wide column">
            <h2>Name: {item.name}</h2>
            <p>
              <strong>Description: </strong>
              {item.discription}
            </p>
            <strong>
              Price: ${item.cost} per day
            </strong>
            <br />

            <button
              className="ui button fluid"
              onClick={() =>
                handleCardClick(null)
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>{
                removeCardClick(item)
                }
              }
            >
              {buttonName}
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ItemSpec;
