import React, { PropTypes } from 'react';
import InfoPanel from './InfoPanel';

class StopsSchedule extends React.Component {
  componentDidMount() {
    this.props.onInitialize(this.props.match.params.stopGroupId);
  }

  render() {
    const {departures, isLoading, error} = this.props;
    
    if(isLoading || error) {
      return (<InfoPanel isLoading={isLoading} error={error} />);
    }

    return (
      <div className="departures-list-container">
        <ul>
          {departures.map(departure => (
            <li>
              <div className="time">{departure.departureTime} min</div>
              <div className="line">{departure.lineName}</div>
              <div className="destination">{departure.destination}</div>
            </li>
          ))}
        </ul>
      </div>
    );
  }
}

let departureShape = PropTypes.shape({
    lineName: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departureTime: PropTypes.number.isRequired
  })

StopsSchedule.propTypes = {
  onInitialize: PropTypes.func.isRequired,
  departures: PropTypes.arrayOf(departureShape),
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
};

export default StopsSchedule;
