import { combineReducers } from "redux"
import generalReducer from "./reducers/general"

export interface RootState {
    general: {
        clickCount: number
    }
}

const rootReducer = combineReducers({
    general: generalReducer
})


export default rootReducer