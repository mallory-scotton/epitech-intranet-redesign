import React from "react";
import GradientLeft from "./components/gradients/GradientLeft";
import GradientRight from "./components/gradients/GradientRight";
import Login from "./components/forms/Login";

export default function App() {
    return (
        <div className="relative flex flex-col" id="app-container">
            <div className="relative container mx-auto max-w-7xl z-10 px-6 min-h-[calc(100vh_-_64px_-_108px)] mb-12 flex-grow">
                <Login/>
            </div>
            <GradientLeft/>
            <GradientRight/>
        </div>
    );
}
