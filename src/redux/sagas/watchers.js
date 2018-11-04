import { takeEvery, takeLatest, all} from "redux-saga/effects";
import { 
    loginUser,
    fetchBlogs, 
    postBlog,
    fetchCommentById,
    fetchAllComments
} from "./blog"
import {
    FETCH_BLOGS_TYPE,
    POST_BLOG_TYPE,
    LOGIN_USER_TYPE,
    FETCH_COMMENTBYID_TYPE,
    FETCH_ALLCOMMENTS_TYPE
} from "../types"

/*
    Put all watchers in 1 rootReducer
*/
export default function* rootReducer(){
    yield takeLatest(LOGIN_USER_TYPE, loginUser),
    yield takeEvery(FETCH_BLOGS_TYPE, fetchBlogs),
    yield takeLatest(POST_BLOG_TYPE, postBlog)
    yield takeEvery(FETCH_COMMENTBYID_TYPE, fetchCommentById),
    yield takeEvery(FETCH_ALLCOMMENTS_TYPE, fetchAllComments)
}
