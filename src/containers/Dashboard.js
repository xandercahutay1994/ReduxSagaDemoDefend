import React, {Component} from "react"
import {
    BrowserRouter as Router, 
    Route, 
    browserHistory,
    Link
} from "react-router-dom";
import { connect } from "react-redux"
import PropTypes from "prop-types"
import BlogForm from "./BlogForm"
import Login from "./Login"
import { 
    TRIG_GET_BLOG_ACTION,
    TRIG_GET_COMMENTBYID_ACTION
} from "../redux/actions/blog"
import Modal from 'react-awesome-modal'

class Dashboard extends Component{
    constructor(){
        super()
        this.state = {
            modalStat: false,
            body: '',
            email: '',
            name: '',
            blogId: ''
        }
    }

    componentDidMount(){
        this.props.fetchBlogApi()
        this.setState({ blogId: this.props.newBlogId})
    }

    componentWillReceiveProps(props){
        const { newBlog, newBlogId } = props

        if(newBlog && newBlogId){

            const body = {
                ...newBlog,
                id: newBlogId
            }
            this.props.blogLists.unshift(body)
        }

        if(props.commentId == this.state.blogId){
            this.setState({
                name: props.commentInfo.name,
                body: props.commentInfo.body,
                email: props.commentInfo.email
            })
        }
    }

    displayBlogs = () => {
        const blogLists = this.props.blogLists.map(res => (
            <div key={res.id}>
                <a href="#" onClick={()=>this.openModal(res.id)}> <h4>{ res.title } </h4></a>
                <p> { res.body } </p>
            </div>
        ))

        return (
            <div>
                <BlogForm />
                <div className="mt-5">
                    {
                        !this.props.loading ?
                            <h1 className="text-center"><i className="fa fa-refresh fa-spin"></i> Loading...</h1>
                        :
                            blogLists
                    }
                </div>
            </div>
        )
    }

    openModal = id => {
        this.setState({ blogId: id })
        this.props.fetchCommentByIdApi(id);
        this.modalState();
    }

    modalState = () => {
        this.setState({ modalStat: true })
    }

    closeModal = () => {
         this.setState({ modalStat: false })
    }

    displayModal = () => {
        return (
            <Modal visible={this.state.modalStat} width="500" key={this.state.blogId}>
                <div className="justify-content-center mt-3 p-2">
                        <div className="row">
                        <h4 className="col-md-2"> Email </h4>
                        <span className="form-control col-md-8">{this.state.email} </span>
                    </div>
                    <div className="row mt-3">
                        <h4 className="col-md-2"> Name </h4>
                        <span className="form-control col-md-8">{this.state.name} </span>
                    </div>
                    <div className="row mt-3">
                        <h4 className="col-md-2"> Body </h4>
                        <textarea value={this.state.body} className="form-control col-md-8" readOnly></textarea>
                    </div>
                    <a href="#" className="offset-md-8 mt-3 btn btn-danger" onClick={()=>this.closeModal()}> Close </a>
                </div>
            </Modal>
        )
    }

    render(){
        return( 
            <div className="container">
                {
                    !this.props.authenticated ?
                        <Login />
                    :
                        this.displayBlogs()
                } 
                {this.displayModal()}
            </div>
        )
    }
}

const mapStateToProps = state => {
    return {
        blogLists : state.blogs,
        newBlog: state.blog,
        newBlogId: state.blogId,
        commentId: state.commentId,
        loading: state.loader,
        authenticated: state.isMatch,
        commentInfo: state.commentDetailsById
    }
}

const mapDispachToProps = dispatch => {
    return  {
        fetchBlogApi: () => {
            dispatch(TRIG_GET_BLOG_ACTION())
        },
        fetchCommentByIdApi: (id) => {
            dispatch(TRIG_GET_COMMENTBYID_ACTION(id))
        }
    }
}

export default connect(
    mapStateToProps,
    mapDispachToProps
)(Dashboard);