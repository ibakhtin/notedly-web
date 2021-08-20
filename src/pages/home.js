import React, { useEffect } from "react";

import Button from "../components/Button";

const Home = () => {
    useEffect(() => {
        document.title = "Home — Notedly";
    });

    return (
        <div>
            <p>This is Home page.</p>
            <Button>Click me!</Button>
        </div>
    );
};

export default Home;