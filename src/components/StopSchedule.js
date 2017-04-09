import React, { PropTypes } from 'react';

class StopsSchedule extends React.Component {
  componentDidMount() {
    this.props.onInitialize(this.props.match.params.stopGroupId);
  }

  render() {
    const {departures} = this.props;
    
    return (
      <div className="stops-list-container">
        {JSON.stringify(departures)}
      </div>
    );
  }
}

let departureShape = PropTypes.shape({
    lineNumber: PropTypes.string.isRequired,
    destination: PropTypes.string.isRequired,
    departureTime: PropTypes.number.isRequired
  })

StopsSchedule.propTypes = {
  onInitialize: PropTypes.func.isRequired,
  departures: PropTypes.arrayOf(departureShape)
};

export default StopsSchedule;
