import React from 'react';
import con from './Content.module.css';

const Content = () => {
    return <div className={con.content}>
        <img src="https://s4.anilist.co/file/anilistcdn/user/banner/b5364675-tKxHe0c9fHTJ.jpg"/>
        <div>
            ava
        </div>
        <div>
            my posts
            <div className={`${con.item} ${con.active}`}>
                new post
            </div>
            <div className={con.item}>
                <div>
                    post1
                </div>
                <div>
                    post2
                </div>
            </div>
        </div>
    </div>
};

export default Content();
