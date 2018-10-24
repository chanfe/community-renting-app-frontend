import React from "react";

const CheckoutCard = props => {
  const { item, button_name, handleCardClick } = props;
  const backgroundStyle = {
    backgroundColor: 'white'
  };

  const imgStyle = {
    height: '140px',
    width: '140px'
  };

  return (
    <div className="ui segment">
      <div className="content" style={backgroundStyle}>
        <div className="header">User Name</div>
        <div className="ui divider"></div>

        <div className="ui grid">
          <div className="two column row">
            <div className="column">
            <img className="ui medium image" style={imgStyle} src={item.image_url}/></div>
            <div className="column ui grid">
              <div className="two column row">
                <div className="column"><h3>{item.name}</h3></div>
                <div className="column">${item.cost} per day</div>
              </div>
              <div className="sixteen wide column description"><p>{item.discription}</p></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

};

export default CheckoutCard;
