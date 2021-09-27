import './App.css';
import React from 'react';
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import Content from "./components/Content";

const App = () => {
    return (
        <div className='app-wrapper'>
            {Header}
            {NavBar}
            {Content}
        </div>);
}

export default App;
