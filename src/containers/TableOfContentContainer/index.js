import { connect } from 'react-redux';
import { getData, getLoadingState, getTopLevelContent, getAllPages, getFilterString } from 'ducks/tableOfContent';
import { bindActionCreators } from 'redux';
import TableOfContent from 'components/TableOfContent';

const mapStateToProps = (state) => ({
    isLoading: getLoadingState(state),
    topLevelContent: getTopLevelContent(state),
    allPages: getAllPages(state),
    filter: getFilterString(state)
});

export const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { getData }, dispatch);

const TableOfContentContainer = connect(mapStateToProps, mapDispatchToProps)(TableOfContent);

export default TableOfContentContainer;
