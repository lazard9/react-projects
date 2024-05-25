import { useState } from "react";
import "./ProgressBar.scss";

const ProgressBar = () => {
    const [scroll, setScroll] = useState(0);

    const handleScroll = () => {
        const scrollTop = window.scrollY;
        const windowHeight = window.innerHeight;
        const bodyHeight = document.body.scrollHeight - windowHeight;
        const scrollPercentage = (scrollTop / bodyHeight) * 100;
        setScroll(scrollPercentage);
    };

    window.addEventListener("scroll", handleScroll);

    handleScroll();

    return <div className="progress-bar" style={{ width: `${scroll}%` }}></div>;
};

// Cleanup function
window.removeEventListener("scroll", handleScroll);

export default ProgressBar;
