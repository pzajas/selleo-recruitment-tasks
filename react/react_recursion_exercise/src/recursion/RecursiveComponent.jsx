import React from "react"
import PropTypes from "prop-types"

function RecursiveComponent({ components }) {
  const checkArr = components => {
    if (components.length === 0) {
      return
    }
    return (
      <div className="App-box">
        {components[0].name}
        {checkArr(components.slice(1))}
      </div>
    )
  }

  return <div>{checkArr(components)}</div>
}

RecursiveComponent.propTypes = {
  components: PropTypes.arrayOf(PropTypes.elementType).isRequired,
}

export default RecursiveComponent
