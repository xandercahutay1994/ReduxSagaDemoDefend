import React, {Component} from "react"
import { connect } from "react-redux"
import { TRIG_GET_ALLCOMMENTS_ACTION } from "../redux/actions/blog"

class Comment extends Component{

    componentDidMount(){
        this.props.fetchComment();
    }

    displayComments = () => {
        const comments = this.props.allComments.map(res => (
            <div key={res.id}>
                <h4 className="text-primary"> {res.email} </h4>
                <p> {res.body} </p>
            </div>
        ))

        return(
            <div className="mt-5">
                {
                    !this.props.loading ?
                        <h1 className="text-center mt-5"><i className="fa fa-refresh fa-spin"></i> Loading...</h1>
                    :
                        comments
                }
            </div>     
        )

    }

    render(){
        // const comments = this.props.allComments.map(res => (
        //     <div key={res.id}>
        //         <h3> {res.name} </h3>
        //         <p> {res.body} </p>
        //     </div>
        // ))

        return(
            <div className="mt-5 col-lg-12">
                <h1 className="text-center"> All Comments </h1>
                {/* { comments } */}
                {/* { this.displayComments()} */}
                <this.displayComments />
            </div>
        )
    }
}

const mapStateToProps = state => {
    console.log(state.comments)
    return {
        allComments: state.comments,
        loading: state.loader
    }
}

const mapDispatchToProps = dispatch => {
    return {
        fetchComment: () => {
            dispatch(TRIG_GET_ALLCOMMENTS_ACTION())
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Comment)
