import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/background";

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
            <Background />
        </Router>
    );
}

export default App;
