import {  call, put } from "redux-saga/effects";
import axios from "axios";
import { 
    FETCH_BLOG_URL, 
    POST_BLOG_URL, 
    FETCH_USER_URL,
    FETCH_COMMENTBYID_URL,
    FETCH_ALLCOMMENTS_URL
} from "../route";
import { 
    POST_BLOG_REDUCER,
    RECEIVE_BLOGS_REDUCER,
    LOGIN_USER_REDUCER,
    RECEIVE_COMMENTBYID_REDUCER,
    RECEIVE_ALLCOMMENTS_REDUCER    
} from "../types";

export function* fetchBlogs(){
    try{
        const response = yield call(axios, FETCH_BLOG_URL)
        yield put({
            type: RECEIVE_BLOGS_REDUCER,
            payload: response.data,
            loader: true
        })
    }catch(e){
        console.log(e)
    }
}

export function* postBlog({payload}){
    try{
        const response = yield call(axios.post, POST_BLOG_URL, { body: payload })
        yield put({
            type: POST_BLOG_REDUCER,
            payload: response.data.body,
            blogId: response.data.id
        })
    }catch(e){
        console.log(e)
    }
}

export function* loginUser(result){
    try{
        const response = yield call(axios, FETCH_USER_URL)

        yield put({
            type: LOGIN_USER_REDUCER,
            payload: result
        })

        console.log('get')
    }catch(e){
        console.log(e)
    }
}

export function* fetchCommentById({payload}){
    try{
        const response = yield call(axios, FETCH_COMMENTBYID_URL + payload)
        yield put({
            type: RECEIVE_COMMENTBYID_REDUCER,
            payload: response.data,
            commentId: response.data.id
        })
    }catch(e){
        console.log(e)
    }
}

export function* fetchAllComments(){
    try{
        const response = yield call(axios, FETCH_ALLCOMMENTS_URL)
        yield put({
            type: RECEIVE_ALLCOMMENTS_REDUCER,
            payload: response.data,
            loader: true
        })
    }catch(e){
        console.log(e)
    }
}