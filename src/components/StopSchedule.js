import React, { PropTypes } from 'react';

class StopsSchedule extends React.Component {
  render() {
    const {onInitialize, departures} = this.props;

    onInitialize(this.props.match.params.stopGroupId);

    return (
      <div className="stops-list-container">
        {JSON.stringify(departures)}
      </div>
    );
  }
}

StopsSchedule.propTypes = {
  onInitialize: PropTypes.func.isRequired,
  departures: PropTypes.any
};

export default StopsSchedule;
