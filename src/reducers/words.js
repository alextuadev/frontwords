import {
  SAVE_WORD,
  CLEAN_ALL_WORDS,
  DELETE_WORD
} from '../constants/actionTypes';

export default function reportsReducer(state = { list: [] }, action) {
  let list, l;
  switch (action.type) {
    case SAVE_WORD:
      l = state.list;
      l.unshift()
      let el = action.element.text;
      return {
        ...state,
        list: [el].concat(state.list)
      };
    case DELETE_WORD:
      const nList = [...state.list]
      nList.splice(action.element, 1)
      return {
        ...state,
        list: nList
      };

    case CLEAN_ALL_WORDS:
      list = []
      return {
        list,
      };

    default:
      return state;
  }
}
