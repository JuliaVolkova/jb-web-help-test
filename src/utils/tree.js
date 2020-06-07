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
