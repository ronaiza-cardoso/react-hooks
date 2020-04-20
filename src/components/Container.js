import React from 'react'


export default function Container({ children }) {
    return (
        <div 
            style={{ 
                background: '#2E2D2D',
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                height: '100vh'
            }}
        >
            {children}
        </div>
    );
}
