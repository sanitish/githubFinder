import React from 'react';
import { Link } from 'react-router-dom';
function Nav(props) {
    return (
        <nav className="navbar bg-primary" >
            <Link to = '/home'>
                <i className='fab fa-github' /> {props.title}
            </Link>
            <ul>
                <li>
                    <Link to='/' >home</Link>

                </li>
                <li>
                    < Link to='/about' >about</Link>

                </li>
            </ul>
        </nav>
    )


}


export default Nav;