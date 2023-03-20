import React from "react"
//Import Images and Icons:
import { FaSearch, FaEnvelope, FaBell } from 'react-icons/fa'

//header component
const MyHeader = props => {
    function setClick() {
        window.location.href = '/settings'
    }
    return (
        <header style={styles.header}>
            <h1 style={styles.left}>Sjotime Development</h1>
            <section style={styles.searchCont}>
                <span style={styles.inputIcon}><FaSearch /></span>
                <input
                    type='test'
                    style={styles.inputwithIcon}
                    placeholder="Search" />
            </section>
            <section style={styles.rightSide}>
                <button style={styles.icon}><FaEnvelope /></button>
                <button style={styles.icon}><FaBell /></button>
            </section>
        </header>
    )
}
export default MyHeader

//Css in Js:

const styles = {
    header: {
        padding: '1%',
        backgroundColor: '#1C7C9C',
        color: 'grey',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        border: '1px solid lightgrey'
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        margin: '10px',
        cursor: 'default',
        color: '#CCA13E'
    },
    searchCont: {
        border: '1px solid #CCA13E',
        display: 'flex',
        flexDirection: 'row',
        borderRadius: '2px',
        width: '40%',
        justifyContent: 'center'
    },
    inputIcon: {
        background: '#ddd',
        padding: '10px',
        display: 'flex',
        alignItems: 'center',
        fontSize: '1rem',
        width: 'auto'
    },
    inputwithIcon: {
        border: 'none',
        flex: 1,
        padding: '10px'
    },
    rightSide: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginRight: '3%',
        marginLeft: '3%',
        backgroundColor: '#CCA13E',
        borderRadius: '5px'
    },
    icon: {
        margin: '5px',
        borderRadius: '50%',
        border: 'none',
        backgroundColor: 'transparent',
        cursor: 'pointer'
    }
}