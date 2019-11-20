import React, { useEffect, useRef } from 'react';
import uuidv4 from 'uuid/v4';
import './console.scss';

export interface ConsoleProps {
    logs: string[]
}

export const Console: React.FC<ConsoleProps> = ({ logs }) => {
    const bodyRef = useRef(null);

    useEffect(() => {
        bodyRef.current.scrollTop = bodyRef.current.scrollHeight;
    }, [logs]);

    return (
        <div className="console">
            <div className="console__header">
                <i className="fa fa-terminal mr-2" aria-hidden="true"></i>
                <span className="title">Output</span>
            </div>
            <div className="console__body" ref={bodyRef}>
                {logs.map(log => {
                    return <div key={uuidv4()} className="log">{log}</div>
                })}
            </div>
        </div>
    );
};