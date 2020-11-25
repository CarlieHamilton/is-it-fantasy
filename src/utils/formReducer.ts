export const formReducer = (state: any, event: any) =>  {
    return {
        ...state,
        [event.target.name]: event.target.value
    }
}