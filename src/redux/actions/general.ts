import { CLICK } from "../reduxConstants"



export const addClickCount: any = (clickCount: number) => (dispatch: any) => {

    return dispatch({
        type: CLICK,
        payload: clickCount + 1
    })

}