import {
    BrowserRouter as Router, 
    Route, 
    browserHistory,
    Link
} from "react-router-dom"
import Comment from "../containers/Comment"
import Dashboard from "../containers/Dashboard"
import Navigation from "./Navigation"

const Routes = () => {
    return(
        <Router history={browserHistory}>
            <div className="container">
                <Navigation />

                <Route path="/" component={Dashboard} exact/>
                <Route path="/comments" component={Comment}/>
            </div>
        </Router>
    )
}
export default Routes;