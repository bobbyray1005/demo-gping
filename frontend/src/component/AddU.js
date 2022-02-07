import React, { useEffect, useState } from 'react';
import './css/AddU.css'
// import { Link } from 'react-router-dom';

const AddU = () => {

    return (
        <div className='box-container'>
            <div class="center">
            <h1>Register</h1>
            <form action='/adduser' method='POST'>
                <div class="inputbox">
                    <input type="text" required="required" name='inputUsername'/>
                    <span>Username</span>
                </div>
                <div class="inputbox">
                    <input type="password" required="required" name='inputPwd'/>
                    <span>Password</span>
                </div>
                <div class="inputbox">
                    <input type="submit" value="submit"/>
                </div>
            </form>
            </div>
        </div>
    );
};

export default AddU;
