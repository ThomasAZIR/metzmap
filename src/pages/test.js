/*users.jsx*/
import React from "react";
import {
    BrowserRouter as Router,
    Route,
    Switch,
    Link,
    Redirect
} from "react-router-dom";
/* We simply can use an array and loop and print each user */
const TestPage = () => {
    return (
        <div>
            <p>Test</p>
            <Link to="/">MainPage</Link>
        </div>
    );
};

export default TestPage;