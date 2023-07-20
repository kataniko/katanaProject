import React, { useState, useEffect } from 'react';

const HorizontalProgressBar = ({ duration, color }) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setProgress((prevProgress) => {
                if (prevProgress < 100) {
                    return prevProgress + 1;
                } else {
                    // Reset the progress to 0 when it reaches 100
                    return 0;
                }
            });
        }, duration);

        return () => {
            clearInterval(interval);
        };
    }, [duration]);

    const progressBarStyles = {
        width: `${progress}%`,
        backgroundColor: color,
        height: '3px',
        transition: `width ${duration}ms linear`,
    };

    return (
        <div>
            <div style={{ width: '100%', height: '3px', backgroundColor: 'transparent', border: "1px solid grey" }}>
                <div style={progressBarStyles}></div>
            </div>
        </div>
    );
};

export default HorizontalProgressBar;
