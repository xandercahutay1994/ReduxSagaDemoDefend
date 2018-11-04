import {
    BrowserRouter as Router, 
    Route, 
    browserHistory,
    Link
} from "react-router-dom";

const Navigation = () => {
    return(
        <nav className="mt-3 row navbar navbar-expand-lg navbar-light bg-dark">
            <Link to="/" className=""><h5> Blogs  </h5></Link>
            <Link to="/comments" className="col"><h5>  Comments </h5></Link>
        </nav>
    )
}

export default Navigation;