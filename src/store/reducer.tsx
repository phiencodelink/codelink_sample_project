import * as actionTypes from './types'

const initialState = {
    advices: [],
    status: 'idle',
    error: null,
}

const reducer = (state: AdviceState = initialState, action: AdviceAction): AdviceState => {
    const { type, payload } = action;
    switch(type) {
        case actionTypes.GET_ADVICE_REQUEST: {
            return {
                ...state,
                error: null,
                status: 'loading',
            }
        }
        case actionTypes.GET_ADVICE_SUCCESS: {
            return {
                error: null,
                status: 'success',
                advices: [payload]
            }
        }
        case actionTypes.GET_ADVICE_ERROR: {
            return {
                ...state,
                error: payload,
                status: 'error',
            }
        }
        default:
            return state;
    }
}

export default reducer;