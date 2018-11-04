import { 
    POST_BLOG_REDUCER, 
    RECEIVE_BLOGS_REDUCER, 
    LOGIN_USER_REDUCER,
    RECEIVE_COMMENTBYID_REDUCER,
    RECEIVE_ALLCOMMENTS_REDUCER
} from "../types"

const blogInitialState = {
    blogs: [],
    blog: {},
    blogId: '',
    loader: false,
    users: [],
    isMatch: false,
    commentDetailsById: [],
    comments: []
}

const reducers = (state = blogInitialState, action) => {
    switch (action.type){
        case LOGIN_USER_REDUCER:
            state = {
                ...state,
                users: action.payload,
                isMatch: action.payload
            }
            break;
        case RECEIVE_BLOGS_REDUCER:
            state = {
                ...state,
                blogs: action.payload,
                loader: action.payload
            }
            break;
        case POST_BLOG_REDUCER:
            state = {
                ...state,
                blog: action.payload,
                blogId: action.blogId += 1
            }
            break;
        case RECEIVE_COMMENTBYID_REDUCER:
            state = {
                ...state,
                commentDetailsById: action.payload,
                commentId: action.commentId
            }
            break;
        case RECEIVE_ALLCOMMENTS_REDUCER:
            state = {
                ...state,
                comments : action.payload,
                loader: action.loader
            }
            break;
        default: 
            break;
    }
    return state;
}

export default reducers;

/*
    Reducers => are just pure functions
    Actions => payloads of information that send data from my application to my store, only source of information for the store!
            => send payloads information by using store.dispatch()
    Handles an action and return new state
    This is like an AGENT like James Bond :D
*/