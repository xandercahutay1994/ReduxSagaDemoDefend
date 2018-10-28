import React, {Component} from 'react';

export default class Login extends Component{

    render(){
        return(
            <div className="container mt-5">
                <h1 className="text-center"> Login </h1>
                <button
                    onClick={this.updateClick}
                    className="btn btn-primary col-md-5 center"
                >
                Click Me!
                </button>
            </div>
        )
    }
}
