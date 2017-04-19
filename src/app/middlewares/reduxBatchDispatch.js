/** Middleware for redux.
 * *https://docs.google.com/a/sprinklr.com/document/d/1wn6dsaDE-f6OjLdXSMhASl1dKhaoE45iTHx50OYt4iw/edit?usp=sharing
 * We cant use the above npm as 0.2.0 is not returning the reduces result. The issue is fixed in master but not published
 */

export const type = '@@redux-batch-middleware/BATCH';

export const batch = ({ dispatch }) => {
    return (next) => (action) => {
        return Array.isArray(action)
            ? dispatch({ type: type, payload: action })
            : next(action);
    };
};

export const batching = (reducer) => {
    return function batcher(state, action) {
        return action.type === type
            ? action.payload.reduce(batcher, state)
            : reducer(state, action);
    };
};
