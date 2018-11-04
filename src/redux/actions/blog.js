// // Action => plain JS object...object that describes a change that we want to make. Need to have a type property and value must be a string!
// // Dispatch => triggers an actions in the application, to change your state YOU HAVE TO DISPATCH AN ACTION
// // mapDispatch => receives dispatch method and returns callback props that I want to inject in presentational component..

import { 
    POST_BLOG_TYPE, 
    FETCH_BLOGS_TYPE, 
    LOGIN_USER_TYPE,
    FETCH_COMMENTBYID_TYPE,
    FETCH_ALLCOMMENTS_TYPE
} from "../types"

/*
    BLOG ACTIONS
*/

export function TRIG_GET_BLOG_ACTION(){
    return {
        type: FETCH_BLOGS_TYPE
    }
}

export function TRIG_POST_BLOG_ACTION(data){
    return {
        type: POST_BLOG_TYPE,
        payload: data
    }
}

/*
    USER ACTIONS
*/

export function TRIG_LOGIN_USER_ACTION(data){
    return {
        type: LOGIN_USER_TYPE,
        payload: data
    }
}

/*
    COMMENT ACTIONS
*/

export function TRIG_GET_COMMENTBYID_ACTION(id){
    return {
        type: FETCH_COMMENTBYID_TYPE,
        payload: id
    }
}

export function TRIG_GET_ALLCOMMENTS_ACTION(){
    return {
        type: FETCH_ALLCOMMENTS_TYPE
    }
}