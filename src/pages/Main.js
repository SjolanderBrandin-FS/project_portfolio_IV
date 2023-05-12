import React, { Component } from 'react'
import InfoPage from '../components/InfoPage'
import Header from '../components/Header'

class Settings extends Component {
    state = {
        userData: [],
        isLoaded: true
    }


    componentDidMount() {
        const profile = this.state.isLoaded
        if (profile) {
            this.fetchData()
            console.log('Settings Page Loaded')
        } else {
            console.log('Can not load the Settings Page')
        }

    }


    // fetchData() {
    //     this.setState({
    //         isLoaded: true,
    //         golfData: []
    //     })
    //     fetch()
    //         .then(response => response.json())
    //         .then(responseJSON => responseJSON.results.map(data => ({
    //             // return responseJSON.results.rankings.map(data => ({   
    //             // }
    //             // ))
    //             position: `${data.position}`,
    //             player_name: `${data.player_name}`,
    //             num_events: `${data.num_events}`,
    //             total_points: `${data.total_points}`
    //         })))
    //         .then(golfData => this.setState({
    //             golfData,
    //             isLoaded: false
    //         }))
    //         .catch(err => console.log(err))

    // }


    render() {
        const { isLoaded, golfData } = this.state
        return (
            <main>
                <Header pgTitle='Main Page' />
                <h1 style={styles.h1}>Professional Golf Rankings</h1>
                <div style={styles.cardCont}>
                    {/* {!isLoaded && golfData.length < 999 ? golfData.map(data => {
                        const { player_name, num_events, total_points, position } = data
                        return <InfoPage
                            key={position}
                            player_name={player_name}
                            position={'Position: ' + position}
                            num_events={'Events Played: ' + num_events}
                            total_points={'Total Points: ' + total_points}
                        />
                    }) : null
                    } */}
                </div>
            </main>

        )
    }
}
export default Settings

const styles = {
    cardCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
    h1: {
        color: 'black'
    }
}