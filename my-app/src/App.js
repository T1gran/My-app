import './App.css';
import React from 'react';
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import Content from "./components/Profile/Profile";
import Dialogs from "./components/Dialogs/Dialogs";
import {BrowserRouter, Route} from 'react-router-dom';

const App = () => {
    return (
        <BrowserRouter>
            <div className='app-wrapper'>
                {Header}
                {NavBar}
                <div className='app-wrapper-content'>
                    <Route path = '/dialogs'>
                        {Dialogs}
                    </Route>
                    <Route path = '/profile'>
                        {Content}
                    </Route>
                </div>
            </div>
        </BrowserRouter>);
}

export default App;
