import React, { useState, useEffect, useRef } from 'react';
import './Terminal.sass';

const Terminal = () => {
    const [lines, setLines] = useState([]);
    const terminalRef = useRef(null);

    const logs = [
        { text: '> npm run dev', type: 'command' },
        { text: '  - vite v5.3.4 ready', type: 'info' },
        { text: '> Starting backend server...', type: 'command' },
        { text: '[SYSTEM] Initializing Node.js environment...', type: 'info' },
        { text: '[DB] Connecting to MongoDB Atlas Cluster...', type: 'info' },
        { text: '[DB] Handshake established with cluster-0.mongodb.net', type: 'success' },
        { text: '[SERVER] Express server running on port 5000', type: 'success' },
        { text: '----------------------------------------', type: 'muted' },
        { text: '> GET /api/v1/projects - 200 OK', type: 'request' },
        { text: '> GET /api/v1/user/alan - 200 OK', type: 'request' },
        { text: '[REDIS] Cache hit for key "portfolio_data"', type: 'info' },
        { text: '> POST /api/v1/contact - 201 Created', type: 'success' },
        { text: '[WEBHOOK] GitHub event received: push -> main', type: 'info' },
        { text: '[CI/CD] Deploying latest build to production...', type: 'info' },
        { text: '[STATUS] Portfolio is online and optimized.', type: 'success' },
    ];

    useEffect(() => {
        let currentLogIndex = 0;
        const interval = setInterval(() => {
            if (currentLogIndex < logs.length) {
                setLines((prev) => [...prev, logs[currentLogIndex]]);
                currentLogIndex++;
            } else {
                clearInterval(interval);
            }
        }, 1000);

        return () => clearInterval(interval);
    }, []);

    useEffect(() => {
        if (terminalRef.current) {
            terminalRef.current.scrollTop = terminalRef.current.scrollHeight;
        }
    }, [lines]);

    return (
        <div className="terminal-window">
            <div className="terminal-header">
                <div className="buttons">
                    <span className="dot red"></span>
                    <span className="dot yellow"></span>
                    <span className="dot green"></span>
                </div>
                <div className="title">bash — Fullstack Dev Console</div>
            </div>
            <div className="terminal-body" ref={terminalRef}>
                {lines.map((line, index) => (
                    <div key={index} className={`terminal-line ${line.type}`}>
                        {line.text}
                    </div>
                ))}
                <div className="cursor-line">
                    <span className="prompt">$</span>
                    <span className="cursor">|</span>
                </div>
            </div>
        </div>
    );
};

export default Terminal;
