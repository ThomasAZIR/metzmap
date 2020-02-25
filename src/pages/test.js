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
            <p>Test 222</p>
            <Link to="/"><section><article><p>test</p></article></section></Link>

            <footer>super</footer>
        </div>
    );
};

export default TestPage;