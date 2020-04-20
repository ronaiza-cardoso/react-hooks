import React, { useState, useContext } from 'react'

import { ThemeContext, PACIENT, RESEARCHER } from '../../Providers/ThemeProvider'

import './style.css'

export default function NavBar() {
    const [isPatient, setIsPatient] = useState(false)
    
    const { theme, setTheme } = useContext(ThemeContext);

    function handleInputChange({ target }) {
        setIsPatient(target.checked)

        if (isPatient) {
            setTheme(PACIENT)
        } else {
            setTheme(RESEARCHER)
        }
    }

    const { bgColor, fontColor } = theme

    return (
        <nav style={{ background: bgColor, borderBottomColor: fontColor }}>
            <label className="switch">
                <input type="checkbox" checked={isPatient} onChange={handleInputChange}/>
                <span className="slider round" />
            </label>
        </nav>
    );
}
