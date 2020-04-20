import React, { useContext } from 'react'

import { ThemeContext } from '../Providers/ThemeProvider';

export default function Login() {
    // consuming the current theme
    const { theme } = useContext(ThemeContext)

    // using them
    const { bgColor, fontColor } = theme
    return (
        <div 
            style={{ 
                background: bgColor,
                width: '100vw',
                height: '80px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
        >
            <h1 style={{ color: fontColor }}>Login</h1>
        </div>
    );
}
