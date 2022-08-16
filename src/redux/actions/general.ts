import { CLICK } from "../reduxConstants"



export const addClickCount: any = () => (dispatch: any) => {

    return dispatch({
        type: CLICK,
    })

}