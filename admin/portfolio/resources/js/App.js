import React, {Component} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from "./components/Menu";
import {BrowserRouter} from "react-router-dom";
import AppRoute from "./route/AppRoute";

class App extends Component {
    render() {
        return (
            <>
                <AppRoute/>
            </>
        );
    }
}

export default App;
