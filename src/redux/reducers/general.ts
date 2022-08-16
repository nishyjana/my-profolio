
import _ from 'lodash';
import { CLICK } from '../reduxConstants';

export interface InitialStateInt {
    clickCount: number
}
export const initialState: InitialStateInt = {
    clickCount: 0
}

const generalReducer = (state = initialState, action: any): InitialStateInt => {
    switch (action.type) {
        case CLICK:
            return {
                ...state,
                clickCount: initialState.clickCount++

            }

        default:
            return state;
    }
}

export default generalReducer;