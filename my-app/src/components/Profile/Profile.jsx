import React from 'react';
import con from './Profile.module.css';
import MyPosts from "./MyPosts/MyPosts";

const Profile = () => {
    return <div className={con.content}>
        <img src="https://s4.anilist.co/file/anilistcdn/user/banner/b5364675-tKxHe0c9fHTJ.jpg"/>
        <div>
            ava
        </div>
        <MyPosts />
    </div>
};

export default Profile();
