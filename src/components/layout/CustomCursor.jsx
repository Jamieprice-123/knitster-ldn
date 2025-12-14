import React, { useEffect, useState } from 'react';

const CustomCursor = () => {
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [trail, setTrail] = useState([]);
    const [isVisible, setIsVisible] = useState(false);
    const maxTrailPoints = 3; // Reduced trail length for better performance

    useEffect(() => {
        const updateCursorPosition = (e) => {
            setPosition({ x: e.clientX, y: e.clientY });

            // Ensure cursor is visible after first mouse movement
            if (!isVisible) {
                setIsVisible(true);
            }

            // Update trail points with throttling
            setTrail(prevTrail => {
                const newPoint = { x: e.clientX, y: e.clientY, id: Date.now() };
                return [...prevTrail, newPoint].slice(-maxTrailPoints);
            });
        };

        // Handle mouse leaving the window
        const handleMouseLeave = () => {
            setIsVisible(false);
        };

        // Handle mouse entering the window
        const handleMouseEnter = () => {
            setIsVisible(true);
        };

        window.addEventListener('mousemove', updateCursorPosition);
        window.addEventListener('mouseleave', handleMouseLeave);
        window.addEventListener('mouseenter', handleMouseEnter);

        return () => {
            window.removeEventListener('mousemove', updateCursorPosition);
            window.removeEventListener('mouseleave', handleMouseLeave);
            window.removeEventListener('mouseenter', handleMouseEnter);
        };
    }, [isVisible]);

    // Only render trail if we have at least 2 points
    const hasTrail = trail.length >= 2;
    const pathData = hasTrail ? `M ${trail.map(point => `${point.x} ${point.y}`).join(' L ')}` : '';

    return (
        <>
            {/* Custom cursor */}
            <div
                className={`fixed pointer-events-none z-[9999] transition-opacity duration-300 ${isVisible ? 'opacity-100' : 'opacity-0'}`}
                style={{
                    left: `${position.x}px`,
                    top: `${position.y}px`,
                    transform: 'translate(-50%, -50%)'
                }}
            >
                <img
                    src="/images/wool.svg"
                    alt="Yarn cursor"
                    className="w-8 h-8"
                />
            </div>

            {/* Trail */}
            {hasTrail && isVisible && (
                <svg
                    className="fixed inset-0 pointer-events-none z-[9990] w-full h-full"
                >
                    <path
                        d={pathData}
                        fill="none"
                        stroke="#FF69B4"
                        strokeWidth="3"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        style={{
                            opacity: 0.6
                        }}
                    />
                </svg>
            )}
        </>
    );
};

export default CustomCursor;
