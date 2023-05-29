import React from 'react'
// Addition Imports ========================================|
import Players from './pages/Players'
import Favorites from './pages/Favorites'
import MyHeader from './components/MyHeader'
import MyNav from './components/MyNav'
import { HashRouter as Routes, Route } from 'react-router-dom'
import './App.css'

// Decided to keep this format to create an easier and smoother experience with
// less clutter than the Mock ups or Milestone_1 design ideas.


function App() {
    return (
        <div style={styles.container} >
            <MyHeader pgTitle='Main Page' />
            <main style={styles.main}>
                <MyNav />
                <div style={styles.chartCont}>
                    <Routes>
                        <Route path="/" element={<Players />} />
                        <Route path="players" element={<Players />} />
                        <Route path="favorites" element={<Favorites />} />
                    </Routes>
                </div>
            </main>
        </div>
    )
}

export default App

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        background: '#0B3954',
        height: '100%',
    },
    main: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        height: 'auto'
    },
    chartCont: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        height: 'auto',
        width: '100%',
        background: '#0B3954',
        borderLeft: '1px solid silver'
    }
}