import React, { PropTypes } from 'react';

class StopsSchedule extends React.Component {
  render() {
    
    return (
      <div className="stops-list-container">
        {this.props.match.params.stopGroupId}
      </div>
    );
  }
}

StopsSchedule.propTypes = {
};

export default StopsSchedule;
