export const asyncNameCreator = (actionName) => ({
    REQUEST: `${actionName}_REQUEST`,
    SUCCESS: `${actionName}_SUCCESS`,
    FAILURE: `${actionName}_FAILURE`,
    NAME: actionName,
    toString() {
        return actionName;
    }
});
