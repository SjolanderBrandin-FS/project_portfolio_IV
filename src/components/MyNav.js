import React from "react"
import { NavLink } from "react-router-dom"

const MyNav = props => {
    return (
        <nav style={styles.navCont}>
            <NavLink style={styles.link} to="/players"> Players</NavLink>
            <NavLink style={styles.link} to="/favorites"> Favorites</NavLink>
        </nav>
    )
}

export default MyNav

const styles = {
    navCont: {
        display: 'flex',
        flexDirection: 'column',
        margin: '100px 50px'
    },
    link: {
        fontSize: '20px',
        backgroundColor: 'lightgrey',
        color: '#0B3954',
        marginTop: '50px',
        padding: '5px',
        width: 'auto',
        border: '1px solid #464646',
        borderRadius: '15px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px 0 silver'
    }
}