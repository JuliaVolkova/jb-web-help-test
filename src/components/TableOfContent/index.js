import React, { Component } from 'react';
import MenuItem from 'components/MenuItem';
import Skeleton from 'components/Skeleton';
import bemcl from 'bem-cl';
import './index.sass';

const b = bemcl('TableOfContent');

class TableOfContent extends Component {
    state = {
        open: [],
        selected: ''
    }

    componentDidMount() {
        this.props.getData();
    }

    onElementClick = (e, itemId) => {
        e.stopPropagation();
        if (this.state.open.includes(itemId)) {
            this.setState({ open: this.state.open.filter((item) => item !== itemId) });
        } else {
            this.setState({ open: [...this.state.open, itemId] });
        }
    }

    onElementSelect = (e, itemId) => {
        e.stopPropagation();
        this.setState({ selected: itemId });
    }

    render() {
        const { topLevelContent = [], allPages, isLoading } = this.props;
        return (
            <nav className={b()}>
                {isLoading
                    ? <Skeleton count={5}/>
                    : <ul>
                        {topLevelContent.map((item) =>
                            <MenuItem
                                key={item.id}
                                item={item}
                                selected={this.state.selected}
                                onElementSelect={this.onElementSelect}
                                onElementClick={this.onElementClick}
                                allPages={allPages}
                                open={this.state.open}
                            />)}
                    </ul>}
            </nav>
        );
    }
}

export default TableOfContent;
