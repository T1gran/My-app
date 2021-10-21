import React from 'react';
import s from './Post.module.css';

const Post = (props) => {
    return (<div className={s.ava}>
                <img src={'https://dmtalkies.com/wp-content/uploads/2021/09/ezgif-2-c09a5b7e70c3-compressed.jpg'}/>
                {props.post}
            </div>)
};

export default Post;
