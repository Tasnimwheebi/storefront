const initialState = {
    categories:[
        {
            name:'electronics',
            displayName:'ELECTRONIC',
            description:'tv'
        },
        {
            name:'food',
            displayName:'FOOD',
            description:'rice'
        },
    ],
    active:'electronics'
}
 const categoryReducer=  (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'change':
        let active = payload.name;
            return { cat:state.categories,act:active  };
    // case 'RESET':
    //     return initialState;
    default:
        return state;
};

 }
  export const changeCategory = (name) => {
    return {
        type: 'change',
        payload: name
    }
  };

export default categoryReducer;