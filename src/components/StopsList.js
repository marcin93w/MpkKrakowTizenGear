import React, { PropTypes } from 'react';
import Stop from './Stop';

class StopsList extends React.Component {
  render() {
    const { stops, onStopClick, isLoading, error } = this.props;

    if (isLoading) {
      return (
        <h2>Loading...</h2>
      );
    }
    if(error) {
      return (
        <h3>Unable to load: {error}</h3>
      )
    }

    return (
      <ul>
        {stops.map(stop =>
          <Stop key={stop.id} {...stop} onClick={() => onStopClick(stop.id)} />
        ) }
      </ul>
    );
  }
}

StopsList.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onStopClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default StopsList;
