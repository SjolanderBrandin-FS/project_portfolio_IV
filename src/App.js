import React from 'react'
// Addition Imports ========================================|
import Display from './pages/Display'
import { Routes, Route } from 'react-router-dom'
import './App.css'


function App() {
    return (
        <div style={styles.container} >
            <Routes>
                <Route path="/" element={<Display />} />
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