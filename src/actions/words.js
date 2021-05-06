import * as types from "../constants/actionTypes";

const saveWord = (element) => {
  return {
    type: types.SAVE_WORD,
    element
  };
};


const deleteWord = (element) => {
  return {
    type: types.DELETE_WORD,
    element
  };
};

const cleanWords = () => {
  return {
    type: types.CLEAN_ALL_WORDS,
  };
};

export function saveWordAction(element) {
  return async dispatch => {
    try {
      dispatch(saveWord(element));
    } catch (err) {
      console.log("Error, save element  ", err)
    }
  };
}


export function deleteWordAction(element) {
  return async dispatch => {
    try {
      dispatch(deleteWord(element));
    } catch (err) {
      console.log("Error, delete element ", err)
    }
  };
}



export function cleanWordsAction() {
  return async dispatch => {
    try {
      dispatch(cleanWords());
    } catch (err) {
      console.log("Error; clean report ", err)
    }
  };
}
