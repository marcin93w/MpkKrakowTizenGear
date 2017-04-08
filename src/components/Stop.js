import React, { PropTypes } from 'react'

const Stop = ({ onClick, name, stopGroupId, distance }) => (
    <div className="stop" onClick={onClick}>
      <div className="stop-name">{name}</div> 
      <div className="stop-distance">Distance: {(distance/1000).toFixed(2)} km</div>
    </div>
)

Stop.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  stopGroupId: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
}

export default Stop