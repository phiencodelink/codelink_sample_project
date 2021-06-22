import * as actionTypes from './types';
import { Dispatch } from 'redux'
import axios from 'axios';

export const getAdvice = () => async (dispatch: Dispatch) => {
    console.log('action')
    try {
        getAdviceRequest(dispatch);
        console.log('hi')
        const advice = await axios.get("/advice");
        getAdviceSuccess(dispatch, advice.data);
    } catch (error) {
        getAdviceError(dispatch, error);
    }
}

const getAdviceRequest = (dispatch: Dispatch) => {
    dispatch({
        type: actionTypes.GET_ADVICE_REQUEST
    })
}

const getAdviceSuccess = (dispatch: Dispatch, advice: AdviceInterface) => {
    dispatch({
        type: actionTypes.GET_ADVICE_SUCCESS,
        payload: advice,
    })
}

const getAdviceError = (dispatch: Dispatch, error: string) => {
    dispatch({
        type: actionTypes.GET_ADVICE_ERROR,
        payload: error,
    })
}

export const deleteAdvice = (adviceId: string) => {

}



