import React, { Component } from 'react';
import PropType from 'prop-types';

class Title extends Component {
  render() {
    const { headline } = this.props;
    return (
      <h2>{headline}</h2>
    );
  }
}

Title.propType = {
  headline: PropType.string,
};

export default Title;
