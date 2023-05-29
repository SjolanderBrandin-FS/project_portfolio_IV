import React from 'react'
import RemoveBtn from './RemoveBtn'

const FavCard = props => {

    return (
        <article style={styles.article}>
            <p style={styles.name}>{props.player_name}</p>
            <div style={styles.div}>
                <p style={styles.desc}>Position: </p>
                <p style={styles.info}>{props.position}</p>
            </div>
            <div style={styles.div}>
                <p style={styles.desc}>Num Events: </p>
                <p style={styles.info}>{props.num_events}</p>
            </div>
            <div style={styles.div}>
                <p style={styles.desc}>Total Points: </p>
                <p style={styles.info}>{props.total_points}</p>
            </div>
            <RemoveBtn btnText="Remove" onClick={props.remove_click} />
        </article>
    )

}

export default FavCard

const styles = {
    article: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'start',
        backgroundColor: '#25A5D0',
        width: '200px',
        height: '300px',
        margin: '50px',
        border: '1px solid silver',
        borderRadius: '15px',
        boxShadow: '10px 3px 8px 0 darkgrey'
    },
    desc: {
        width: '100%',
        height: '10%',
        marginLeft: '5px',
        color: '#464646',
        textAlign: 'start',
        textDecoration: 'underline'
    },
    div: {
        display: 'flex',
        marginRight: '5px'
    },
    name: {
        color: '#8D162E',
        fontWeight: 'bold'
    },
    info: {
        color: 'silver',
        backgroundColor: '#0B3954',
        width: '25%',
        borderRadius: '3px',
        padding: '1px'
    }
}