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
        case 'DISPLAY':
        let active = payload;
        let description=state.categories[0].description;
            return { categories:state.categories,act:active , description:description };
    // case 'RESET':
    //     return initialState;
    default:
        return state;
};

 }
//   export const changeCategory = (name) => {
//     return {
//         type: 'ACTIVE',
//         payload: name
//     }
//   };

export default categoryReducer;