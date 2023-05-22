import React from "react"

const MyNav = props => {
    function playClick() {
        window.location.href = '/players'
    }
    function favsClick() {
        window.location.href = '/favorites'
    }
    return (
        <nav style={styles.navCont}>
            <button style={styles.link} onClick={playClick}> Players</button>
            <button style={styles.link} onClick={favsClick}> Favorites</button>
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
        width: 'auto',
        border: '1px solid #464646',
        borderRadius: '45px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px 0 silver'
    }
}