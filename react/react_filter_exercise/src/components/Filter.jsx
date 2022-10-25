import React from "react"
import { connect } from "react-redux"

import { searchKeyword } from "../redux/people/actions"

function Filter(props) {
  return (
    <div className="App-box">
      <input type="text" value={props.searchKeywordValue} onChange={e => props.setSearchKeyword(e.target.value)} />
    </div>
  )
}

Filter.propTypes = {
  // ...
}

const mapStateToProps = state => ({
  searchKeywordValue: state.searchKeyword,
})

const mapDispatchToProps = dispatch => ({
  setSearchKeyword: keyword => dispatch(searchKeyword(keyword)),
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
