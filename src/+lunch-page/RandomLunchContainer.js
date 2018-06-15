import React, { Component } from 'react';
import { RestaurantComponent } from './RestaurantComponent';

class RandomLunchContainer extends Component {
  render() {
    console.log('does this work?');
    return (
      <div>
        <button> Here is the button </button>
        <RestaurantComponent />
      </div>
    );
  }
}

export { RandomLunchContainer };
