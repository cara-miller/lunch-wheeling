import React, { Component } from 'react';
import { RestaurantComponent } from './RestaurantComponent';

class RandomLunchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const message = 'what the heck';
    return (
      <div>
        <button> Here is the button </button>
        <RestaurantComponent message={message} />
      </div>
    );
  }
}

export { RandomLunchContainer };
