import { handleActions } from 'redux-actions';
import { createAction } from 'redux-actions';
import { createSelector } from 'reselect';
import { asyncNameCreator } from 'utils/asyncNameCreator';

//-----------------------CONSTANTS--------------------------------------------------------
export const GET_DATA = asyncNameCreator('app/GET_DATA');

export const SAVE_FILTER = asyncNameCreator('app/SAVE_FILTER');
//-----------------------CONSTANTS--------------------------------------------------------

//-----------------------SELECTORS--------------------------------------------------------
export const getTableOfContent = (state) => state.tableOfContent;
export const getLoadingState = (state) => getTableOfContent(state).isLoading;
export const getAllPages = (state) => getTableOfContent(state).pages;
export const getTopLevelIds = (state) => getTableOfContent(state).topLevelIds;

export const getFilterString = (state) => getTableOfContent(state).filter;

export const getTopLevelContent = createSelector(
    getTopLevelIds,
    getAllPages,
    (topLevelIds, pages) => topLevelIds.map((item) => pages[item])
);

export const getItemSubElement = (state, props) => getAllPages(state)[props.pageId];

//-----------------------SELECTORS--------------------------------------------------------

// ----------------------ACTION CREATORS--------------------------------------------------
export const getData = createAction(GET_DATA.REQUEST);
export const getDataSuccess = createAction(GET_DATA.SUCCESS);
export const getDataError = createAction(GET_DATA.FAILURE, (error) => ({ error }));

export const saveFilterString = createAction(SAVE_FILTER.REQUEST);
// ----------------------ACTION CREATORS--------------------------------------------------

//---------------------------REDUCER------------------------------------------------------
const defaultState = {
    isLoading: false,
    topLevelIds: [],
    pages: {},
    filter: ''
};

export default handleActions(
    {
        [GET_DATA.REQUEST]: (state) => ({
            ...state,
            isLoading: true
        }),
        [GET_DATA.SUCCESS]: (state, { payload }) => ({
            ...state,
            topLevelIds: payload.topLevelIds,
            pages: payload.entities.pages,
            isLoading: false
        }),
        [GET_DATA.FAILURE]: (state, action) => ({
            ...state,
            error: action.payload.error,
            isLoading: false
        }),
        [SAVE_FILTER.REQUEST]: (state, { payload }) => ({
            ...state,
            filter: payload
        })
    },
    defaultState
);
//---------------------------REDUCER------------------------------------------------------
