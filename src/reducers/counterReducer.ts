type initialStateType = {
    readonly counter: number
}

const initialState: initialStateType = {
    counter: 0,
};

type Action = { type: 'INCREMENT' } | { type: 'DECREMENT' };

const counterReducer = (state = initialState, action: Action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                counter: state.counter < 100 ? state.counter + 1 : state.counter
            }
        case 'DECREMENT':
            return {
                counter: state.counter > 0 ? state.counter - 1 : state.counter
            }
        default:
            return state;
    }
}

export default counterReducer;