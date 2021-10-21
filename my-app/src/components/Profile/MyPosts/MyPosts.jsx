import React from 'react';
import s from './MyPosts.module.css';
import Post from "./Post/Post";

const MyPosts = () => {
    return (<div>
        my posts
        <div className={`${s.item} ${s.active}`}>
            <textarea></textarea>
            <button>add post</button>
            <button>delete</button>
        </div>
        <div className = {s.item}>
            <Post post = 'Post 1'/>
            <Post post = 'Post 2'/>
            <Post post = 'Post 3'/>
            <Post post = 'Post 4'/>
            <Post post = 'Post 5'/>
        </div>
    </div>)
};

export default MyPosts;
