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
    activeCategory:'electronics'
}
export default (state = initialState, action) => {
    let { type, payload } = action;
    switch (type) {
        case 'change':
          let activeCategory = payload.name;
          console.log('ACTIVE CATEGORY: ', activeCategory);
          return { ...state, activeCategory };
        default:
          return state;
      }
};

export const changeActiveCategory = (name) => {
    return {
      type: 'change',
      payload: name,
    };
  };