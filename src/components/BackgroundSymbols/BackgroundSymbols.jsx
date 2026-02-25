import React, { useEffect, useRef } from 'react';
import './BackgroundSymbols.sass';

const symbols = ['{', '}', '</>', '*', '//', '>', ';', 'const', '=>', '[]', '()'];

export default function BackgroundSymbols() {
    const containerRef = useRef(null);
    const symbolsRef = useRef([]);

    // Memoize symbols to prevent re-render jumps
    const symbolData = React.useMemo(() => {
        return Array.from({ length: 45 }).map(() => ({
            text: symbols[Math.floor(Math.random() * symbols.length)],
            left: `${Math.random() * 100}%`,
            top: `${Math.random() * 100}%`,
            delay: `${Math.random() * -30}s`,
            duration: `${15 + Math.random() * 20}s`,
            size: `${0.9 + Math.random() * 1.6}rem`,
            moveX: `${(Math.random() - 0.5) * 800}px`,
            moveY: `${(Math.random() - 0.5) * 800}px`
        }));
    }, []);

    useEffect(() => {
        const handleMouseMove = (e) => {
            const { clientX, clientY } = e;

            symbolsRef.current.forEach((symbol) => {
                if (!symbol) return;

                // Get pre-transformed position for more stable calculation
                const rect = symbol.parentElement.getBoundingClientRect();
                const symbolX = rect.left + rect.width / 2;
                const symbolY = rect.top + rect.height / 2;

                const distX = clientX - symbolX;
                const distY = clientY - symbolY;
                const distance = Math.sqrt(distX * distX + distY * distY);

                const radius = 200;

                if (distance < radius) {
                    const angle = Math.atan2(distY, distX);
                    const force = (radius - distance) / radius;
                    const moveX = Math.cos(angle) * force * -80;
                    const moveY = Math.sin(angle) * force * -80;

                    symbol.style.transform = `translate(${moveX}px, ${moveY}px)`;
                } else {
                    symbol.style.transform = 'translate(0, 0)';
                }
            });
        };

        window.addEventListener('mousemove', handleMouseMove);
        return () => window.removeEventListener('mousemove', handleMouseMove);
    }, []);

    return (
        <div className="background-symbols" ref={containerRef}>
            {symbolData.map((data, i) => (
                <div
                    key={i}
                    className="symbol-wrapper"
                    style={{
                        left: data.left,
                        top: data.top,
                        animationDelay: data.delay,
                        animationDuration: data.duration,
                        '--move-x': data.moveX,
                        '--move-y': data.moveY,
                    }}
                >
                    <span
                        ref={el => symbolsRef.current[i] = el}
                        className="symbol"
                        style={{
                            fontSize: data.size
                        }}
                    >
                        {data.text}
                    </span>
                </div>
            ))}
        </div>
    );
}
