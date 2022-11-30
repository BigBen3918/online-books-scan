import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// Global Style
import "./style/global.css";

// Main Components
import Main from "./view/main";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </Router>
    );
}

export default App;
