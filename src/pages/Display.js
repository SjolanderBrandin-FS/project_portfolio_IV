import React, { Component } from 'react'
import InfoPage from '../components/InfoPage'

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


    fetchData() {
        this.setState({
            isLoaded: true,
            golfData: []
        })
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f094955108msh3a73e29521319dbp16a0afjsnb11f326d6d03',
                'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
            }
        }
        fetch('https://golf-leaderboard-data.p.rapidapi.com/world-rankings', options)
            .then(response => response.json())
            .then(responseJSON => {

                console.log(responseJSON)

                return responseJSON.results.rankings.map(data => ({
                    position: `${data.position}`,
                    player_name: `${data.player_name}`,
                    num_events: `${data.num_events}`,
                    total_points: `${data.total_points}`
                }
                ))
            })
            .then(golfData => this.setState({
                golfData,
                isLoaded: false
            }))
            .catch(err => console.log(err))

    }


    render() {
        const { isLoaded, golfData } = this.state
        return (
            <section style={styles.container} >
                <h1 style={styles.h1}>Display</h1>
                {!isLoaded && golfData.length < 1000 ? golfData.map(data => {
                    const { player_name, num_events, total_points, position } = data
                    return <InfoPage
                        key={position}
                        player_name={player_name}
                        position={position}
                        num_events={num_events}
                        total_points={total_points}
                    />
                }) : null
                }
            </section >
        )
    }
}
export default Settings

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
        color: '#25A5D0'
    },
    h1: {
        color: '#25A5D0'
    }
}