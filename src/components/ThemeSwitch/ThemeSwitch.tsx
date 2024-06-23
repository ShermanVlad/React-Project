import React, {useEffect, useState} from 'react';
import styles from './ThemeSwitch.module.css'

const ThemeSwitch = () => {

    const [theme, setTheme] = useState('light')
    useEffect(() => {
        document.documentElement.setAttribute('data-theme', theme)
    }, [theme])

    const toggleMode = () => {
        setTheme((previous) => (previous === 'light' ? 'dark' : 'light'))
    }
    return (
        <div className={styles.ThemeSwitchDiv}>
            <button onClick={toggleMode}><p><b>{theme === 'light' ? 'dark' : 'light'} mode</b></p></button>
        </div>

    );
};

export default ThemeSwitch;