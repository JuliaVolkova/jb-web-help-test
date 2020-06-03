import React, {Component} from 'react';
import MenuItem from "components/MenuItem";
import Skeleton from "components/Skeleton";
import bemcl from 'bem-cl';
import './index.sass';

const b = bemcl('TableOfContent');

const ITEM_LEVEL = {
    top: 0,
    second: 1,
    third: 2,
    forth: 3,
    fifth: 4
}

class TableOfContent extends Component {
    state = {
        open: []
    }

    componentDidMount() {
        this.props.getData();
    }

    onElementClick = (itemId) => {
        if (this.state.open.includes(itemId)) {
            this.setState({open: this.state.open.filter((item) => item !== itemId)})
        } else {
            this.setState({open: [...this.state.open, itemId]});
        }
    }

    render() {
        const {topLevelContent = [], allPages, isLoading} = this.props;
        return (
            <nav className={b()}>
                {isLoading
                    ? <Skeleton count={5}/>
                    : <ul>
                        {topLevelContent.map((item) =>
                            <MenuItem
                                onElementClick={this.onElementClick}
                                pageId={item.id}
                                key={item.id}
                                level={item.level}
                                text={item.title}
                                pages={item.pages}
                                allPages={allPages}
                                open={this.state.open}
                            />)}
                    </ul>}
            </nav>
        )
    }
}

export default TableOfContent;
