import React, {Component} from "react"
import PropTypes from "prop-types"
import { connect } from "react-redux"
import { postBlog } from "../redux/sagas/blog"
import { TRIG_POST_BLOG_ACTION } from "../redux/actions/blog"
import { Link } from "react-router-dom";
import { TRIG_GET_BLOG_ACTION } from "../redux/actions/blog"

class PostBlogs extends Component{
    
    constructor(){
        super()
        this.state = {
            title: '',
            body: ''
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value 
        })
    }

    submit = (e) => {
        e.preventDefault()

        this.props.post({...this.state})

        this.setState({
            title: '',
            body: ''
        })
    }

    render(){
        return (
            <div className="mt-5 col-lg-12">
                <h1 className="text-center"> Blog Posts </h1>
                <hr/>
                <div className="form-group justify-content-center">
                    <form onSubmit={this.submit}>
                        <div className="row">
                            <label className="col-md-6 col-lg-6">
                                Title 
                                <input 
                                    type="text" 
                                    name="title" 
                                    className="form-control" 
                                    onChange={this.onChange}
                                    value={this.state.title}
                                    required
                                />
                            </label>
                        </div>
                        <div className="row">
                            <label name="body" className="col-md-6 col-lg-6">
                                Body
                                <textarea 
                                    name="body" 
                                    className="form-control" 
                                    onChange={this.onChange}
                                    value={this.state.body}
                                    required
                                ></textarea>
                            </label>
                        </div>
                        <button className="btn btn-primary col-lg-6 col-md-12 mt-2" disabled={!this.props.loading}>
                            <i className="fa fa-plus"></i> Add Post
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

// PostBlogs.propTypes = {
//     postBlog: PropTypes.func.isRequired
// }

const mapStateToProps = state => {
    return {
        loading: state.loader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        post: (data) => {
            dispatch(TRIG_POST_BLOG_ACTION(data))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostBlogs);