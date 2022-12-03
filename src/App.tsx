import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Background from "./components/background";

// Global Style
import "./style/global.css";

// Main Components
import Header from "./components/header";
import Main from "./view/main";

function App() {
    return (
        <div className="relative h-[100vh]">
            <Router>
                <Header />
                <Routes>
                    <Route path="/" element={<Main />} />
                </Routes>
                <Background />
            </Router>
        </div>
    );
}

export default App;
