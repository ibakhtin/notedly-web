import React, { useEffect } from "react";

const Home = () => {
    useEffect(() => {
        document.title = "Home — Notedly";
    });

    return (
        <div>
            <p>This is Home page.</p>
        </div>
    );
};

export default Home;