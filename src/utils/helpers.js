export function hasChildren(node) {
    return (typeof node === 'object')
        && (typeof node.pages !== 'undefined');
}

export const prepareChildren = (node, allPages = {}) => {
    return {
        ...node, children: hasChildren(node)
            ? node.pages.map((page) => prepareChildren(allPages[page], allPages))
            : []
    };
};

export const searchWordStartsWith = (string, filter) => {
    return string.toLowerCase().split(' ').some((word) => word.startsWith(filter));
};


export const searchInTree = (values = [], filter = '') => {
    return values.reduce((acc, value) => {
        let result = [];
        if (!hasChildren(value) && searchWordStartsWith(value.title, filter)) {
            result = [...result, value];
        }
        if (value.children.some((child) => searchWordStartsWith(child.title, filter))) {
            result = [...result, {
                title: value.title,
                children: value.children.filter((child) => searchWordStartsWith(child.title, filter))
            }];
        }
        return [...acc, ...result];
    }, []);
};
