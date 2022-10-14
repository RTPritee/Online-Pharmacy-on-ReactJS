import 'bootstrap/dist/css/bootstrap.css';
import {Link} from 'react-router-dom';
const MenuItem=({url,value})=>{
    return (
        <Link to={url}>{value}</Link>
    )
}
export default MenuItem;