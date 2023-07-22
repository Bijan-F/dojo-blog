import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div>
            <h2>Sorry</h2><br />
            <p>The page you are looking for does not exists.</p><br />
            <Link to="/">Back to the home page</Link>
        </div>
    );
}
 
export default NotFound;