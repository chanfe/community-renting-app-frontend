import React from "react";

const ItemSpec = props => {
  let { item } = props;

  let itemType;

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
              <strong>Catchphrase: </strong>
              {item.description}
            </p>
            <strong>
              Class: {item.price} {itemType}
            </strong>
            <br />
            <div className="ui segment">
              <div className="ui three column centered grid">
                <div className="row">
                  <div className="column">
                    <i className="icon large circular red heartbeat" />
                    <strong>{}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular yellow lightning" />
                    <strong>{}</strong>
                  </div>
                  <div className="column">
                    <i className="icon large circular blue shield" />
                    <strong>{}</strong>
                  </div>
                </div>
              </div>
            </div>
            <button
              className="ui button fluid"
              onClick={() =>
                console.log("something on lick")
              }
            >
              Go Back
            </button>
            <button
              className="ui button fluid"
              onClick={() =>{
                console.log('do something on click.')
                }
              }
            >
              Enlist
            </button>
          </div>
        </div>
      </div>
    </div>
  );

};

export default ItemSpec;
