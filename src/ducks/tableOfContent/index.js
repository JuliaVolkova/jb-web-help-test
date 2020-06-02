import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';
import { asyncNameCreator } from 'utils/asyncNameCreator';

//-----------------------CONSTANTS--------------------------------------------------------
export const GET_DATA = asyncNameCreator('app/GET_DATA');
//-----------------------CONSTANTS--------------------------------------------------------

//-----------------------SELECTORS--------------------------------------------------------
export const getLoadingState = (state) => state.tableOfContent.isLoading;
//-----------------------SELECTORS--------------------------------------------------------

// ----------------------ACTION CREATORS--------------------------------------------------
export const getData = createAction(GET_DATA.REQUEST);
export const getDataSuccess = createAction(GET_DATA.SUCCESS);
export const getDataError = createAction(GET_DATA.FAILURE, (error) => ({ error }));
// ----------------------ACTION CREATORS--------------------------------------------------

//---------------------------REDUCER------------------------------------------------------
const defaultState = {
    isLoading: false
};

export default handleActions(
    {
        [GET_DATA.REQUEST]: (state) => ({
            ...state,
            isLoading: true
        }),
        [GET_DATA.SUCCESS]: (state) => ({
            ...state,
            isLoading: false
        }),
        [GET_DATA.FAILURE]: (state, action) => ({
            ...state,
            error: action.payload.error,
            isLoading: false
        })
    },
    defaultState
);
//---------------------------REDUCER------------------------------------------------------
