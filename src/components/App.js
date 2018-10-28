import React, {Component} from 'react';
import Login from './screens/Login';

class App extends Component{

    constructor(){
        super()

        this.state = {
            message: 1
        }
    }

    click = () => {
        console.log(this);
        this.setState({
            message: 53
        })
    }

    render(){
        return( 
            <div className="container">
                <Login />
            </div>
        )
    }
}

export default App;