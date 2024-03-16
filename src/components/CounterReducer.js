const counterReducer = (state = 0, action) => {
    switch (action.type) {
        case "INCREMENT":
            return state + 1;
        case "DECREMENT":
            return state - 1;
        case "TOGGLE":
            return !state;
        case "BY_TEN":
            return state + 10;
        default:
            return state;
    };
};

export default counterReducer;