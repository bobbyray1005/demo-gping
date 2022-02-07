import React, { useEffect, useState } from 'react';
import './css/AllU.css';

const AllU = () => {
    useEffect(() => {
        fetchItems();
    }, []
    );

    const [users, setUsers] = useState([]);

    const fetchItems = async ()=>{
        const data = await fetch('/alluser');
        const users = await data.json();
        setUsers(users);
    };

    return (
        <div className='container'>
        {
            users.map(user => (
                <div className="card">
                    <div className="box">
                        <div className="p-right-box-content">
                            <h2>
                                {user.username}
                            </h2>
                            <h3>
                                {user.username}
                            </h3>
                            <p>
                                {user.description}
                            </p>
                            <a href="/"
                            className='card1' target='_blank' rel="noreferrer">Read More</a>
                        </div>
                    </div>
                </div>
            ))
        }
        </div>
    );
};

export default AllU;
