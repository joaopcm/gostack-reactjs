import React from 'react'
import PropTypes from 'prop-types'

function TechItem({ tech, handleDelete }) {
  return (
    <li>
      {tech}
      <button type="button" onClick={() => handleDelete(tech)}>Remove</button>
    </li>
  )
}

TechItem.defaultProps = {
  tech: 'Empty'
}

TechItem.propTypes = {
  tech: PropTypes.string,
  handleDelete: PropTypes.func.isRequired
}

export default TechItem