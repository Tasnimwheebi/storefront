import superagent from 'superagent';
const initialState = {
    categories:[
        {
            name:'electronics',
            displayName:'ELECTRONIC',
            description:'Category Description Goes Here'
        },
        {
            name:'food',
            displayName:'FOOD',
            description:'Category Description Goes Here'
        },
        {
            name:'phones',
            displayName:'PHONE',
            description:'Category Description Goes Here'
        },
        {
            name:'shirts',
            displayName:'SHIRTS',
            description:'Category Description Goes Here'
        },

    ],
   
}
 const categoryReducer=  (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        // case 'DISPLAY':
        case 'GET':
        let active = payload;
        // console.log('data from api',payload.results);
         payload.results.map(items=>{
             console.log(items.category);
             return items.category;
         })
        let description=state.categories[0].description;
            return { categories:state.categories,act:active , description:description };
    // case 'RESET':
    //     return initialState;
    default:
        return state;
};

 }

 

 
 export const getRemoteData = (name) => (dispatch, state) => {
 const api = `https://api-js401.herokuapp.com/api/v1/products?category=${name}`;
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

//   export const changeCategory = (name) => {
//     return {
//         type: 'ACTIVE',
//         payload: name
//     }
//   };

export default categoryReducer;