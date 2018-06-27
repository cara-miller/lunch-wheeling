import React, { Component } from 'react';
import { RestaurantComponent } from './RestaurantComponent';

class RandomLunchContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    this.setState({ wasButtonClicked: true });
  }

  render() {
    const wasButtonClicked = this.state.wasButtonClicked;
    let message = '';

    if (wasButtonClicked) {
      message = 'Something Stupid';
    }
    return (
      <div>
        <RestaurantComponent
          messageMaterializer={this.handleClick}
          message={message}
          wasButtonClicked={wasButtonClicked}
        />
      </div>
    );
  }
}

export { RandomLunchContainer };
