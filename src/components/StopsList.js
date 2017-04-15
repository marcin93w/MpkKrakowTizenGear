import React, { PropTypes } from 'react';
import Stop from './Stop';
import InfoPanel from './InfoPanel';
import {Link} from 'react-router-dom';
import SteerageService from '../services/SteerageService';

class StopsList extends React.Component {
  componentDidMount() {
    if(!this.props.selectedStop) {
      this.props.fetchStops();
    }
    this.steerageService = new SteerageService(this.props.onPrevSelected, this.props.onNextSelected);
    this.steerageService.onBackPressedCallback = () => tizen.application.getCurrentApplication().exit();
    this.steerageService.activate();
  }

  componentWillUnmount() {
    this.steerageService.deactivate();
  }

  render() {
    const { prevStop, nextStop, secPrevStop, secNextStop, selectedStop, isLoading, error } = this.props;

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
            <Stop key={selectedStop.stopGroupId} {...selectedStop} />
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
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string,
  fetchStops: PropTypes.func.isRequired,
  onPrevSelected: PropTypes.func.isRequired,
  onNextSelected: PropTypes.func.isRequired,
};

export default StopsList;
