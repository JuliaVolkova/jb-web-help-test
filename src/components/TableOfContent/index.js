import React, { Component } from 'react';
import MenuItem from 'components/MenuItem';
import Skeleton from 'components/Skeleton';
import InputSearchContainer from 'containers/InputSearchContainer';

import { prepareChildren, searchInTree } from 'utils/helpers';

import bemcl from 'bem-cl';
import './index.sass';

const b = bemcl('TableOfContent');

class TableOfContent extends Component {
    state = {
        open: [],
        active: ''
    };

    componentDidMount() {
        this.props.getData();
    }

    handleKeyDown = (e, itemId) => {
        if (e.keyCode === 13) {
            this.onElementClick(e, itemId);
        }
    };

    onElementClick = (e, itemId) => {
        e.stopPropagation();

        if (this.state.open.includes(itemId)) {
            this.setState({
                open: this.state.open.filter((item) => item !== itemId)
            });
        } else {
            this.setState({
                open: [...this.state.open, itemId],
                active: itemId
            });
        }
    };

    renderContent = (topLevelContent, allPages) => {
        // turn structure to tree
        if (!this.props.isLoading) {
            return topLevelContent.map((item) => prepareChildren(item, allPages));
        }
    };

    prepareContentWithFilter = (topLevelContent, allPages, filter) => {
        if (!this.props.isLoading) {
            return searchInTree(this.renderContent(topLevelContent, allPages), filter).map((item) => item.title);
        }
    };

    render() {
        const { topLevelContent = [], allPages, isLoading, filter } = this.props;
        return (
            <nav className={b()}>
                <InputSearchContainer/>
                {isLoading
                    ? <Skeleton count={5}/>
                    : <ul>
                        {topLevelContent
                            .filter((item) => this.prepareContentWithFilter(topLevelContent, allPages, filter)
                                .includes(item.title))
                            .map((item) =>
                                <MenuItem
                                    key={item.id}
                                    item={item}
                                    active={this.state.active}
                                    onElementSelect={this.onElementSelect}
                                    onElementClick={this.onElementClick}
                                    allPages={allPages}
                                    open={this.state.open}
                                    inputString={filter}
                                    handleKeyDown={this.handleKeyDown}
                                />)}
                    </ul>}
            </nav>
        );
    }
}

export default TableOfContent;
