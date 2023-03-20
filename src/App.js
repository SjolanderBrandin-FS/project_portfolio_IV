import React from 'react'
// Addition Imports ========================================|
import Main from './pages/Main'
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
    return (
        <div style={styles.container} >
            <Routes>
                <Route path="/" element={<Main />} />
            </Routes>
        </div>
    )
}

export default App

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        background: '#919191',
        fontSize: '1rem',
        borderRadius: '15px',
    }
}