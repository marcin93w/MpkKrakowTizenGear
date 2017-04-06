import React, { PropTypes } from 'react'

const Stop = ({ onClick, name, stopGroupId, distance }) => (
  <li onClick={onClick}>
    <span className="stop-distance">{(distance/1000).toFixed(2)} km</span> {name}
  </li>
)

Stop.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired,
  stopGroupId: PropTypes.number.isRequired,
  distance: PropTypes.number.isRequired,
}

export default Stop