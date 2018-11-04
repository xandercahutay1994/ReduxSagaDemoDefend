import React, {Component} from "react"
import {
    BrowserRouter as Router, 
    Route, 
    browserHistory,
    Link
} from "react-router-dom";
import Routes from "../components/Routes"
import { connect } from "react-redux"
import Login from "./Login";
import { TRIG_LOGIN_USER_ACTION } from "../redux/actions/blog";

class App extends Component{
    render(){
        return(
            <Router history={browserHistory}> 
                <div className="container">
                    {
                        !this.props.authenticated ?
                            <Login />
                        :
                            <Routes />
                    }
                </div>
            </Router>
        )
    }
}

const mapStateToProps = state => {
    return {
        authenticated: state.isMatch,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => {
            dispatch(TRIG_LOGIN_USER_ACTION(data))
        }
    }
}

// the object return in this component will fs to class component as PROPS
// transforms Redux state into a PROPS or containing PROPS.


// connect => hook into Redux, pull out the entire state from the STORE that I want and pass it through MAPSTATETOPROPS function that I provide.
// can only connect to redux when using CONNECT
// connect => access store.dispatch from the store directly
 
// export default App;
export default connect(
    mapStateToProps,
    mapDispatchToProps
)(App);