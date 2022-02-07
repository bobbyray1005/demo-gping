import React, {useEffect, useState} from 'react';
import './css/Tweet.css';

const Tweet = () => {

    const [items, setItems] = useState([]);

    useEffect(() =>{
        fetchItems();
    }, [items]
    );

    const fetchItems = async () => {
        const data = await fetch('/tweets');
        const items = await data.json();
        setItems(items);
    };

    return (
        <section>
            <div className='tweet-container'>
                {
                items.map(item => (
                    <div>
                        <div className="card">
                            <div className="box">
                                <div className="box-content">
                                    <h2>
                                        {item.name}
                                    </h2>
                                    <h3>
                                        {item.name}
                                    </h3>
                                    <p>
                                        {item.msg}
                                    </p>
                                    <a href="https://github.com/abaddontsoi/shikoto_grab.git"
                                    className='card1' target='_blank' rel="noreferrer">Contact {item.username}</a>
                                </div>
                            </div>
                        </div>
                    </div>
                ))
                }
                {
                    // items.map(item => (
                    //     <div class="card">
                    //     <div class="card-body p-1">
                    //         <h6 class="card-title">{item.name}</h6>
                    //         <p class="card-text">{item.msg}</p>
                    //         <p class="card-text"><i>by {item.username}</i></p>
                    //     </div>
                    // </div>
                    // ))
                }
            </div>
        </section>
    );
};

export default Tweet;
