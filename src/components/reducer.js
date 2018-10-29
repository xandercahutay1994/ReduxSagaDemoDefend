const countState = {
    countNum: 1,
    lastDataArr: []
}

const userState = {
    name: "Alex",
    age: 12
}

const countReducer = (state = countState, action) => {
    switch (action.type){
        case "INCREMENT":
            state = {
                ...state, // copying properties
                state: state.countNum += action.payload,
                lastDataArr: [...state.lastDataArr, action.payload]
                            // old state: new state payload
            }
            break;
        case "DECREMENT":
            state = {
                ...state,
                state: state.countNum -= action.payload
            }
            break;
        default:
            break;
    }
    return state;
}

const userReducer = (state = userState, action) => {
    switch (action.type) {
        case "SET_NAME":
            state = {
                ...state,
                name: action.payload
            }
            break;
        case "SET_AGE":
                state = {
                    ...state,
                    age: action.payload
                }
            break;
    }

    return state;
}

export {
    countReducer,
    userReducer
}