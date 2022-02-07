import React from 'react';
import './css/Addtweet.css';

const Addtweet = () => {
    return (
        <div className='form-container'>
            <form method='POST' action='/addtweet'>
                <div className="form">
                    <div className="title">Welcome</div>
                    <div className="subtitle">Let's create your tweet!</div>
                    <div className="input-container ic1">
                        <input id="username" className="input" type="text" placeholder=" " 
                        name='username'/>
                        <div className="cut"></div>
                        <label for="username" className="placeholder">User name</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="tweetContent" className="input" type="text" placeholder=" "
                        name='content' />
                        <div className="cut cut-content"></div>
                        <label for="tweetContent" className="placeholder">Tweet content</label>
                    </div>
                    <div className="input-container ic2">
                        <input id="Contact" className="input" type="text" placeholder=" "
                        name='contact' />
                        <div className="cut cut-short"></div>
                        <label for="Contact" className="placeholder">Contact</label>
                    </div>
                    <button type="submit" className="submit">Tweet!</button>
                </div>
            </form>
        </div>
    );
};

export default Addtweet;
