import {handleActions} from 'redux-actions';
import {createAction} from 'redux-actions';
import {createSelector} from 'reselect';
import {asyncNameCreator} from 'utils/asyncNameCreator';

//-----------------------CONSTANTS--------------------------------------------------------
export const GET_DATA = asyncNameCreator('app/GET_DATA');
//-----------------------CONSTANTS--------------------------------------------------------

//-----------------------SELECTORS--------------------------------------------------------
export const getTableOfContent = (state) => state.tableOfContent;
export const getLoadingState = (state) => getTableOfContent(state).isLoading;
export const getAllPages = (state) => getTableOfContent(state).pages;
export const getTopLevelIds = (state) => getTableOfContent(state).topLevelIds;

export const getTopLevelContent = createSelector(
    getTopLevelIds,
    getAllPages,
    (topLevelIds, pages) => topLevelIds.map((item) => pages[item])
)

export const getItemSubElement = (state, props) => getAllPages(state)[props.pageId];

// export const getItemSubElementPages = createSelector(
//     getAllPages,
//     getItemSubElement,
//     (allPages = [], subElement = {}) => subElement.hasOwnProperty('pages')
//         ? subElement.pages.map((page) => allPages[page])
//         : []
// )

//-----------------------SELECTORS--------------------------------------------------------

// ----------------------ACTION CREATORS--------------------------------------------------
export const getData = createAction(GET_DATA.REQUEST);
export const getDataSuccess = createAction(GET_DATA.SUCCESS);
export const getDataError = createAction(GET_DATA.FAILURE, (error) => ({error}));
// ----------------------ACTION CREATORS--------------------------------------------------

//---------------------------REDUCER------------------------------------------------------
const defaultState = {
    isLoading: false,
    topLevelIds: [],
    pages: {},
    toplevelContent: []
};

export default handleActions(
    {
        [GET_DATA.REQUEST]: (state) => ({
            ...state,
            isLoading: true
        }),
        [GET_DATA.SUCCESS]: (state, {payload}) => ({
            ...state,
            topLevelIds: payload.topLevelIds,
            pages: payload.entities.pages,
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
