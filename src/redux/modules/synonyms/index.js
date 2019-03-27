const LOAD =          'SYNONYMS_LOAD';
const LOAD_SUCCESS =  'SYNONYMS_LOAD_SUCCESS';
const LOAD_FAIL =     'SYNONYMS_LOAD_FAIL';

const initialState = {
  data: [],
  word: '',
  loading: false,
  loadError: null
}

export default function reducer( state = initialState, action = {}) {
  switch (action.type) {
    case LOAD:
      return {
        ...state,
        loading: true,
        word: action.word
      };
    case LOAD_SUCCESS:
      return {
        ...state,
        data: action.payload,
        loading: false,
        loadError: null
      };
    case LOAD_FAIL:
      return {
        ...state,
        data: [],
        loading: false,
        loadError: action.error
      };

    default:
      return state;

  }
}

export function load(word) {
  return {
    type: LOAD,
    word: word
  }
}

export function success(payload) {
  return {
    type: LOAD_SUCCESS,
    payload: payload
  }
}

export function error(error) {
  return {
    type: LOAD_FAIL,
    error: error
  }
}
