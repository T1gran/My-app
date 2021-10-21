import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";

const App = () => {
    return (
        <div className='app-wrapper'>
            {Header}
            {NavBar}
            <div className='app-wrapper-content'>
                {Content}
                {/*{Dialogs}*/}
            </div>
        </div>);
}

export default App;
