import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';
import InputSearch from 'components/InputSearch';
import { bindActionCreators } from 'redux';
import { saveFilterString } from 'ducks/tableOfContent';
import debounce from 'lodash.debounce';

class InputSearchContainer extends Component {
    state = {
        inputString: ''
    };

    debounced = debounce((callback, value) => callback(value), 400);

    onChange = (event) => {
        this.setState({ inputString: event.target.value },
            () => this.debounced(this.props.saveFilterString, this.state.inputString.toLowerCase()));
    };

    onClear = () => {
        this.setState({ inputString: '' },
            () => this.debounced(this.props.saveFilterString, this.state.inputString));
    };

    render() {
        return <Fragment>
            <InputSearch
                placeholder={'Start typing something...'}
                onChange={this.onChange}
                onClear={this.onClear}
                value={this.state.inputString}/>
        </Fragment>;
    }
}

export const mapDispatchToProps = (dispatch) =>
    bindActionCreators(
        { saveFilterString }, dispatch);

export default connect(null, mapDispatchToProps)(InputSearchContainer);
