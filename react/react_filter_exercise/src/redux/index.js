import { combineReducers } from "redux"
import { peopleListReducer } from "./people/reducer"
import { searchReducer } from "./people/reducer"

const rootReducer = combineReducers({
  people: peopleListReducer,
  searchKeyword: searchReducer,
})

export default rootReducer
