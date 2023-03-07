const initialState = {
  stackOperation: "",
  sortingColor: "",
  sortingSpeed: 1000,
  play: false,
  arrVal: [],
};

const updateProps = (state = initialState, action) => {
  switch (action.type) {
    case "UPDATE_COLOR": {
      return { ...state, sortingColor: action.sortingColor };
    }

    case "UPDATE_ALGORITHM": {
      return { ...state, sortingAlgorithm: action.sortingAlgorithm };
    }

    case "UPDATE_SPEED": {
      return { ...state, sortingSpeed: action.sortingSpeed };
    }

    // case "UPDATE_NUM": {
    //   return { ...state, amt: action.amt };
    // }
    
    case "UPDATE_ARRAY": {
      return { ...state, arrVal: action.arrVal };
    }

    case 'PLAY_PAUSE': {
      return {...state,play:action.play};
   }

    default:
      return state;
  }
};
export default updateProps;
