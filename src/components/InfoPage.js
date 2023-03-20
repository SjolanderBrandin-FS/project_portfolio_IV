import React from 'react'

const InfoPage = props => {
    return (
        <article style={styles.article}>
            <p style={styles.info}>{props.player_name}</p>
            <p style={styles.info}>{props.position}</p>
            <p style={styles.info}>{props.num_events}</p>
            <p style={styles.info}>{props.total_points}</p>
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
        width: '200px',
        height: '300px',
        margin: '5px',
        border: '.5px solid #000000',
        borderRadius: '15px'
    },
    info: {
        width: '100%',
        height: '10%',
        color: 'white'
    }
}