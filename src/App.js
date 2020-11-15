import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Header from "./components/header";
import Section from "./components/section";
import {DataProvider} from "./components/context";

export default class App extends Component {
    render() {
        return (
            <DataProvider>
                <Router>
                    <div className="app">
                        <Header />
                        <Section />
                    </div>
                </Router>
            </DataProvider>
        );
    }
}
