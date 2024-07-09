const initialState = {
    user: {
      name: 'Khoirunnisa Ulhaq',
      nim: 'a11.2021.13611'
    }
  };
  
  export const userReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'SET_USER':
        return {
          ...state,
          user: action.payload
        };
      default:
        return state;
    }
  };
  