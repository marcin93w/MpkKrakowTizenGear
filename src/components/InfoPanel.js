import React, { PropTypes } from 'react'

const InfoPanel = ({ isLoading, error }) => {
  if (isLoading) {
      return (
        <div className="info-panel">
          <h2>Loading...</h2>
        </div>
      );
    }
    if(error) {
      return (
        <div className="info-panel">
          <h3>Unable to load: {error}</h3>
        </div>
      )
    }
}

InfoPanel.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  error: PropTypes.string
}

export default InfoPanel