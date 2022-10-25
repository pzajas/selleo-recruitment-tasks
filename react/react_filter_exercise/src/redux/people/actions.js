import * as types from "../people/types"

// this is an example action
export const searchKeyword = keyword => ({
  type: types.SEARCH_KEYWORD,
  payload: keyword,
})

// ...
