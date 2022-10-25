import React from "react"
import { useSelector } from "react-redux"
import { connect } from "react-redux"
import { filterTodo } from "../redux/people/selectors"

// ...

function People(props) {
  return (
    <div>
      {props.people.map(person => (
        <div className="App-box" key={person.id}>
          {person.name}
        </div>
      ))}
    </div>
  )
}

People.propTypes = {
  // ...
}

const mapStateToProps = state => {
  return {
    people: filterTodo(state.people.list, state.searchKeyword),
  }
}

export default connect(mapStateToProps)(People)
