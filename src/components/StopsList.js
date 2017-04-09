import React, { PropTypes } from 'react';
import Stop from './Stop';
import InfoPanel from './InfoPanel';
import {Link} from 'react-router-dom';

class StopsList extends React.Component {
  render() {
    const { prevStop, nextStop, secPrevStop, secNextStop, selectedStop, onStopClick, isLoading, error } = this.props;

    if(isLoading || error) {
      return (
        <InfoPanel isLoading={isLoading} error={error} />
      )
    }

    return (
      <div className="stops-list-container">
        <div className="prev-stop second">
          {secPrevStop &&
            <Stop key={secPrevStop.stopGroupId} {...secPrevStop} />
          }
        </div>
        <div className="prev-stop">
          {prevStop &&
            <Stop key={prevStop.stopGroupId} {...prevStop} />
          }
        </div>
        <div className="selected-stop">
          <Link to={"schedule/" + selectedStop.stopGroupId}>
            <Stop key={selectedStop.stopGroupId} {...selectedStop} onClick={() => onStopClick()} />
          </Link>
        </div>
        <div className="next-stop">
          {nextStop &&
            <Stop key={nextStop.stopGroupId} {...nextStop} />
          }
        </div>
        <div className="next-stop second">
          {secNextStop &&
            <Stop key={secNextStop.stopGroupId} {...secNextStop} />
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
  selectedStop: stopShape,
  nextStop: stopShape,
  secNextStop: stopShape,
  onStopClick: PropTypes.func.isRequired,
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default StopsList;
