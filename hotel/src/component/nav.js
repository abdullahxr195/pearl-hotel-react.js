import '../css component/nav.css';
import { Link } from 'react-router-dom';
export default function Nav() {
    return (
        <div id='nav'>
            <ul id='ul-nav'>
                <li><Link to='/' className='nav-link'>Events</Link></li>
                <li><Link to='/page2'className='nav-link'>Services</Link></li>

            </ul>


        </div>
    );
}