import React from 'react';
import con from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div>
        my posts
        <div>
            <textarea></textarea>
            <button>add post</button>
            <button>delete</button>
        </div>
        <div className={`${con.item} ${con.active}`}>
            new post
        </div>
        <div className={con.item}>
            <Post />
            <Post />
            <Post />
            <Post />
            <Post />
        </div>
    </div>)
};

export default MyPosts;
