import { combineReducers } from "redux"
import listsReducer, { ListLoadAction, ListState } from "./list"

export interface AppState {
  list: ListState
}

const rootReducer = combineReducers<AppState, ListLoadAction>({
  list: listsReducer
})
export default rootReducer
