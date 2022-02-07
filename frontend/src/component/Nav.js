import React from 'react'; // ES6 js
import {Link} from 'react-router-dom';


const Nav = () => {
    return(
        <nav class="navbar navbar-expand-lg navbar-dark bg-dark top">
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navMainMenu"
             aria-controls="navMainMenu" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div id="navMainMenu" class="navbar-collapse collapse">
                <div class="navbar-nav ml-auto">
                    <Link to='/' className="nav-item nav-link active">Home</Link>
                    <Link to='/tweets' className="nav-item nav-link">Tweets</Link>
                    <Link to='/alluser' className="nav-item nav-link">See all users</Link>
                    <Link to='/adduser' className='nav-item nav-link'>Register</Link>
                    <Link to='/addtweet' className='nav-item nav-link'>Add a new tweet</Link>
                </div>
            </div>
        </nav>
    );
}

export default Nav;
