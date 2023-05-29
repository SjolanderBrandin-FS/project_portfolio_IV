import React from 'react'

const RemoveBtn = props => {
    return (
        <button style={styles.button} onClick={props.onClick}>
            {props.btnText}
        </button>
    )
}
export default RemoveBtn

const styles = {
    button: {
        display: 'block',
        marginLeft: 'auto',
        marginRight: 'auto',
        marginTop: '30px',
        width: '75%',
        color: 'silver',
        backgroundColor: '#0B3954'
    }
}
