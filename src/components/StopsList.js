import React, { PropTypes } from 'react';
import Stop from './Stop';

class StopsList extends React.Component {
  render() {
    const { stops, onStopClick, isLoading, error } = this.props;

    if (isLoading) {
      return (
        <div className="info-panel">
          <h2>Loading...</h2>
        </div>
      );
    }
    if(error) {
      return (
        <div className="info-panel">
          <h3>Unable to load: {error}</h3>
        </div>
      )
    }

    return (
      <div className="stops-list">
        <ul>
          {stops.map(stop =>
            <Stop key={stop.stopGroupId} {...stop} onClick={() => onStopClick(stop.id)} />
          ) }
        </ul>
      </div>
    );
  }
}

StopsList.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.shape({
    stopGroupId: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onStopClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default StopsList;
