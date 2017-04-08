import React, { PropTypes } from 'react';
import Stop from './Stop';

class StopsList extends React.Component {
  render() {
    const { prevStop, nextStop, secPrevStop, secNextStop, selectedStop, onStopClick, isLoading, error } = this.props;

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
      <div className="stops-list-container">
        <div className="prev-stop second">
          {secPrevStop &&
            <Stop key={secPrevStop.stopGroupId} {...secPrevStop} onClick={() => onStopClick(secPrevStop.stopGroupId)} />
          }
        </div>
        <div className="prev-stop">
          {prevStop &&
            <Stop key={prevStop.stopGroupId} {...prevStop} onClick={() => onStopClick(prevStop.stopGroupId)} />
          }
        </div>
        <div className="selected-stop">
          <Stop key={selectedStop.stopGroupId} {...selectedStop} onClick={() => onStopClick(selectedStop.stopGroupId)} />
        </div>
        <div className="next-stop">
          {nextStop &&
            <Stop key={nextStop.stopGroupId} {...nextStop} onClick={() => onStopClick(nextStop.stopGroupId)} />
          }
        </div>
        <div className="next-stop second">
          {secNextStop &&
            <Stop key={secNextStop.stopGroupId} {...secNextStop} onClick={() => onStopClick(secNextStop.stopGroupId)} />
          }
        </div>
      </div>
    );
  }
}

let stopShape = PropTypes.shape({
    stopGroupId: PropTypes.number.isRequired,
    distance: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  })

StopsList.propTypes = {
  secPrevStop: stopShape,
  prevStop: stopShape,
  selectedStop: stopShape.isRequired,
  nextStop: stopShape,
  secNextStop: stopShape,
  onStopClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default StopsList;
