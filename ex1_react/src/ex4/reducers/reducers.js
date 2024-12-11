import {FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCCESS,FETCH_IMAGES_FAILURE} from '../actions/actions';

const initialState = {
    loading: false,
    images: [],
    error: '',
    currentPage: 1,
    totalPages: 10, 
};

const imagensReducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_IMAGES_REQUEST:
            return { ...state, loading: true };
        case FETCH_IMAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                images: action.payload,
                error: '',
                currentPage: action.page,
                totalPages: action.totalPages,
            };
        case FETCH_IMAGES_FAILURE:
            return { ...state, loading: false, error: action.payload };
        default:
            return state;
    }
};

export default imagensReducer;

