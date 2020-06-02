import React, {Component} from 'react';
import MenuItem from "components/MenuItem";
import bemcl from 'bem-cl';
import './index.sass';

const b = bemcl('TableOfContent');

class TableOfContent extends Component {
    componentDidMount() {
        this.props.getData();
    }

    render() {
        return (
            <nav className={b()}>
                <ul>
                    {['first', 'second', 'third'].map((item) => <MenuItem key={item} text={item}/>)}
                </ul>
            </nav>
        )
    }
}

export default TableOfContent;
