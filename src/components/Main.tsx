import React from "react";

import "./Main.style.css";
import Sidebar from "./Sidebar/Sidebar";

export const Main: React.FC<{}> = () => {

    return (
        <main className="main-content">
            <Sidebar />
        </main>
    )
}