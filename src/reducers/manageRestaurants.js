const defaultState = {
  restaurants: [],
}

export default function manageRestaurants(state = defaultState, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':
    console.log(state.restaurants)
    console.log(state.restaurants, action.restaurant)
      return {
        ...state,
        restaurants: [...state.restaurants, action.restaurant]
      }

    default:
      return state;

  }
};
