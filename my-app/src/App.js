import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Profile/Profile";

const App = () => {
    return (
        <div className='app-wrapper'>
            {Header}
            {NavBar}
            {Content}
        </div>);
}

export default App;
