const initialState = {
    saldo: 0,
};

const DEPOSITAR = 'DEPOSITAR';
const LEVANTAR = 'LEVANTAR';


const reducer = (state = initialState, action) => {
    switch (action.type) {
        case DEPOSITAR:
            return { ...state, saldo: state.saldo + action.amount };
        case LEVANTAR:
            return { ...state, saldo: state.saldo - action.amount };
        default:
            return state;
    }
};

export default reducer;
