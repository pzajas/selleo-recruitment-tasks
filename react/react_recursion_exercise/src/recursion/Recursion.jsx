import React from "react"
import RecursiveComponent from "./RecursiveComponent"
import useTimer from "../hooks/useTimer"

// write components here
const One = () => <div>One</div>
const Two = () => <div>Two</div>
const Three = () => <div>Three</div>

const components = [One, Two, Three]

function Recursion() {
  const seconds = useTimer()

  return (
    <div className="App-wrapper">
      <div className="App-timer">{seconds} seconds</div>
      <RecursiveComponent components={components} />
    </div>
  )
}

Recursion.propTypes = {
  // ...
}

export default Recursion
