import React, { useEffect } from "react";

const Calendly = ({ url }) => {


    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head.appendChild(script);
    }, []);


    return (
        <>
            <div
                className="calendly-inline-widget h-screen z-10"
                data-url={url}
            ></div>
        </>
    );
};

export default Calendly;






/*
import React, { useEffect } from "react";

const Calendly = ({ url }) => {
    useEffect(() => {
        const head = document.querySelector("head");
        const script = document.createElement("script");
        script.setAttribute(
            "src",
            "https://assets.calendly.com/assets/external/widget.js"
        );
        head.appendChild(script);
    }, []);

    return (
        <div
            className="calendly-inline-widget h-screen"
            data-url={url}
        // style={{ minHeight: "100%", width: "100%" }}
        ></div>
    );
};

export default Calendly;


*/
