import React from 'react'

const InfoPage = props => {
    return (
        <article style={styles.article}>
            <p style={styles.info}>{props.id}</p>
            <p style={styles.info}>{props.number}</p>
            <p style={styles.info}>{props.courseid}</p>
            <p style={styles.info}>{props.rotation}</p>
        </article>
    )
}

export default InfoPage

const styles = {
    article: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        backgroundColor: '#25A5D0',
        width: '50%',
        height: '300px',
        margin: '0 25%',
        border: '3px solid #25A5D0'
    },
    info: {
        width: '100%',
        height: '10%'
    }
}