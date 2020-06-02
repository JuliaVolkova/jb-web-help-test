import {connect} from 'react-redux';
import {getData, getLoadingState} from 'ducks/tableOfContent';
import {bindActionCreators} from 'redux';
import TableOfContent from "components/TableOfContent";

const mapStateToProps = (state) => ({
    isLoading: getLoadingState(state)
});

export const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { getData }, dispatch);

const TableOfContentContainer = connect(mapStateToProps, mapDispatchToProps)(TableOfContent);

export default TableOfContentContainer;
