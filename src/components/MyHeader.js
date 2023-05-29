import React from "react"
import MyNav from "./MyNav"
//Import Images and Icons:

//header component
const MyHeader = props => {
    return (
        <header style={styles.header}>
            <h1 style={styles.left}>Sjotime Development</h1>
            <h2 style={styles.right}>User Name</h2>
        </header>
    )
}
export default MyHeader

//Css in Js:

const styles = {
    header: {
        backgroundColor: '#0B3954',
        color: 'lightgrey',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderBottom: '1px solid lightgrey'
    },
    left: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        marginLeft: '10px',
        cursor: 'default'
    },
    right: {
        display: 'flex',
        marginRight: '30px',
        fontSize: '25px',
        cursor: 'default'
    }
}