import React, { PropTypes } from 'react'
import Stop from './Stop'

const StopsList = ({ stops, onStopClick }) => (
  <ul>
    {stops.map(stop =>
      <Stop
        key={stop.id}
        {...stop}
        onClick={() => onStopClick(stop.id)}
      />
    )}
  </ul>
)

StopsList.propTypes = {
  stops: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onStopClick: PropTypes.func.isRequired
}

export default StopsList