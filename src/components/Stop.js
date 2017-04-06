import React, { PropTypes } from 'react'

const Stop = ({ onClick, name }) => (
  <li onClick={onClick}>
    {name}
  </li>
)

Stop.propTypes = {
  onClick: PropTypes.func.isRequired,
  name: PropTypes.string.isRequired
}

export default Stop