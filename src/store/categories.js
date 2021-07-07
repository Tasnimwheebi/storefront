import superagent from 'superagent';
const initialState = {
    categories:[],
   
}
 const categoryReducer=  (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'GET':
            return { categories:payload.results };
    default:
        return state;
};
 }
 export const getRemoteData = (name) => (dispatch, state) => {
 const api = `https://api-js401.herokuapp.com/api/v1/categories`;
    return superagent.get(api).then(res => {
        dispatch(getAction(res.body));  
    });
}
export const getAction = payload => {
    return {
        type: 'GET',
        payload,
    }
}
export default categoryReducer;