import React, {Component} from 'react';
import { createStore } from 'redux';
import { connect } from "react-redux";

class Login extends Component{
    render(){
        return(
            <div className="App container mt-5">
                <h1 className="text-center"> Login </h1>
                <button
                    className="btn btn-primary col-md-5 center"
                    onClick={()=>this.props.setName("Gea")}
                >
                Click Me!
                </button>
                <h1> {this.props.user.name} </h1>
                <h2> {this.props.user.age} </h2>

                <div className="mt-3">
                    <button onClick={()=>this.props.increment()}> + </button>
                        <h1>{this.props.counter.countNum}</h1>
                    <button onClick={()=>this.props.decrement()}> - </button>
                </div>
            </div>
        )
    }
}

//which properties of my local app state do I want to use this component in mapping
const mapStateToProps = (state) => {
    return {
        user: state.userReducer,
        counter: state.countReducer
    }
}

//returns js object
const mapDispatchToProps = (dispatch) => {
    return {
        setName: (name) => {
            dispatch({ 
                type: "SET_NAME",
                payload: name
            })
        },
        increment: () => {
            dispatch({
                type: "INCREMENT",
                payload: 1
            })
        },
        decrement: () => {
            dispatch({
                type: "DECREMENT",
                payload: 1
            })
        }
    }
}

// connect react js and redux
export default connect(mapStateToProps,mapDispatchToProps)(Login);