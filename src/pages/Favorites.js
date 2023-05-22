import React, { Component } from 'react'

class Favorites extends Component {
    state = {
        favList: [],
        isLoaded: true
    }

    // Needs to have a row of your 5-10 favorite players, 
    // saved to an array that loads when the page does.


    render() {
        // const { isLoaded } = this.state
        return (
            <main style={styles.container}>
                <h1 style={styles.h1}>Favorites</h1>
            </main>
        )
    }
}
export default Favorites

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        height: '90vh',
        margin: 'none'

    },
    cardCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: 'auto'
    },
    h1: {
        color: 'silver',
        fontStyle: 'italic',
        fontWeight: 'normal'
    }
}