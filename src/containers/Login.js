import React, { Component } from 'react';
import { connect } from "react-redux";
import { TRIG_LOGIN_USER_ACTION } from "../redux/actions/blog";
import axios from "axios";
import { FETCH_USER_URL } from "../redux/route";

class Login extends Component {
    constructor(){
        super()
        this.state = {
            username: '',
            email: '',
            loginState: false,
            isSubmit: false
        }
    }

    onChange = (e) => {
        this.setState({
            [e.target.name] : e.target.value
        })
    }

    submit = async(e) => {
        e.preventDefault()

        const { username, email } = this.state;
        const result = await axios.get(FETCH_USER_URL);
        const response = await result.data;
        let isUser = false;

        for(let user of response){
            // if(user.username === username && user.email === email)
            if(username.length > 0 && email.length > 0)
                this.setState({ isSubmit: true })

                if(username == "admin" && email == "admin")
                    isUser = true
        }

        if(isUser){
            this.props.login(true)
            this.setState({
                username: '',
                password: ''
            })
        }else{
            this.setState({ loginState: true, isSubmit: false })
        }
    }

    errorLogin = () => {
        const {loginState} = this.state

        const errorTemplate = () => (
            <div className="mt-2">
                <h5 className="text-center text-danger"> Email/Username is incorrect! </h5>
            </div>  
        )
        if(loginState){
            return errorTemplate()
        }
    }

    render(){
        return(
            <div className="container mt-5 col-lg-6">
                <h1 className="text-center"> Login </h1>
                <div className="form-group justify-content-center">
                    <form onSubmit={this.submit}>
                        <div className="row">
                            <label className="col-md-12 col-lg-12">
                                Email 
                                <input 
                                    type="text" 
                                    name="email" 
                                    className="form-control" 
                                    onChange={this.onChange}
                                    required
                                />
                            </label>
                        </div>
                        <div className="row">
                            <label className="col-md-12 col-lg-12">
                                Username 
                                <input 
                                    type="text" 
                                    name="username" 
                                    className="form-control" 
                                    onChange={this.onChange}
                                    required
                                />
                            </label>
                        </div>
                        {this.errorLogin()}
                        <button className="btn btn-primary btn-block mt-2">
                           { !this.state.isSubmit ? <i className="fa fa-sign-in"></i> : <i className="fa fa-spinner"></i> } Login 
                        </button>
                    </form>
                </div>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        login: (data) => {
            dispatch(TRIG_LOGIN_USER_ACTION(data))
        }
    }
}

export default connect(null,mapDispatchToProps)(Login);

// export default Login;
