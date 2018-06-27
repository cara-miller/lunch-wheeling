import React from 'react';

const RestaurantComponent = props => {
  return (
    <div>
      <button onClick={props.messageMaterializer}>here's the new button</button>
      <div>{props.message}</div>
    </div>
  );
};

export { RestaurantComponent };
