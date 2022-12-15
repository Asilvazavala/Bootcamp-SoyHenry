// Importa las action types acá
import { CREATE_CHARACTER, DELETE_CHARACTER, GET_CHARACTERS, GET_CHARACTER_DETAIL, GET_SHIPS } from "../actions";


const initialState = {
  characters: [],
  characterDetail: {},
  ships: [],
};

const rootReducer = (state = initialState, action) => {
  switch (action.type) {

    case GET_CHARACTERS:
      return{
        ...state,
        characters: action.payload 
      }

    case GET_CHARACTER_DETAIL:
      return{
        ...state,
        characterDetail: action.payload 
      }

    case GET_SHIPS:
      return{
        ...state,
        ships: action.payload
      }

    case CREATE_CHARACTER:
      return{
        ...state,
      characters: [...state.characters , action.payload]
      }

    case DELETE_CHARACTER:
      return{
        ...state,
        characters: state.characters.filter((d) => d.id !== action.payload),
      }

    default: return state;

}
};


export default rootReducer;
