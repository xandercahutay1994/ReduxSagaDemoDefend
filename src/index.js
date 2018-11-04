// we use IMPORT because I am using BABEL that compiles ES6...
import React from "react";
import ReactDOM from "react-dom";
import App from "./containers/App";
import { Provider } from "react-redux"; // provides store
import store from "./redux/store/blog";

ReactDOM.render(

    // Provider => like a passageway that connected to every component, pass STORE as PROP
    <Provider store={store}>
        <App />
    </Provider>, 
    document.getElementById("app")
); // refers to index.html
// In order to connect redux to react so that the state pass to store to my react app
// 


                    //passing method returns new function
// const myLogger = (store) => (next) => (action) => { 
//     console.log("Log Action: " + action);
//     next(action)
// }


// export default reducer;

// export default store;
