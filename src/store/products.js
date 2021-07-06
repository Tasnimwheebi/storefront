const initialState = {
    products: [
      {
        name: 'Radio',
        category: 'electronics',
        price: '$99.00'
      },
      {
        name: 'Bread',
        category: 'food',
        price: '$2.39'       
      },
     { name: 'Monitor',
      category: 'electronics',
      price: 100.99,},

      { name: 'Samsung Note 10',
      category: 'phones',
      price: '$1199.99',},

      { name: 'Huawei P',
      category: 'phones',
      price: '$799.99',},

      { name: 'Iphone 12',
      category: 'phones',
      price: '$999.99',},

      { name: 'Java',
      category: 'shirts',
      price: '$24.99',},

      { name: 'JavaScript',
      category: 'shirts',
      price: '$34.99',},

      { name: 'React',
      category: 'shirts',
      price: '$29.99',},

    ],
    displayProducts: [],
  };
  
  
  const productReducer = (state = initialState,action) => {
    let {type,payload} = action;
    switch (type) {
      case 'GET':

        let targetCategory = payload.results;
        console.log(targetCategory);
        // console.log('targetCategory',targetCategory[0]);
    // console.log('payload',payload);
    // let List= targetCategory.filter(item=> item.category===payload.category);
            return {...state, data : [...state.displayProducts,...targetCategory]}; 
     ;
      default:
        return state;
    }
}
  

  export default productReducer;