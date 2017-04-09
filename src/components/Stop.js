import React, { PropTypes } from 'react'

const Stop = ({ name, distance }) => (
    <div className="stop">
      <div className="stop-name">{name}</div> 
      <div className="stop-distance">Distance: {(distance/1000).toFixed(2)} km</div>
    </div>
)

Stop.propTypes = {
  name: PropTypes.string.isRequired,
  stopGroupId: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
}

export default Stop