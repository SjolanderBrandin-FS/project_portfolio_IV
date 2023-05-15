import React, { Component } from 'react'
import InfoPage from '../components/InfoPage'
import Header from '../components/Header'

class Main extends Component {
    state = {
        userData: [],
        isLoaded: true
    }


    componentDidMount() {
        const profile = this.state.isLoaded
        if (profile) {
            this.fetchData()
            console.log('Main Page Loaded')
        } else {
            console.log('Can not load the Main Page')
        }

    }


    fetchData() {
        this.setState({
            isLoaded: true,
            golfData: []
        })
        const url = 'https://golf-leaderboard-data.p.rapidapi.com/world-rankings';
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': 'f094955108msh3a73e29521319dbp16a0afjsnb11f326d6d03',
                'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(responseJSON => responseJSON.results.rankings.map(data => ({
                position: `${data.position}`,
                player_name: `${data.player_name}`,
                num_events: `${data.num_events}`,
                total_points: `${data.total_points}`
            })))
            .then(golfData => this.setState({
                golfData,
                isLoaded: false
            }))
            .catch(err => console.log(err))

    }


    render() {
        const { isLoaded, golfData } = this.state
        return (
            <main>
                <Header pgTitle='Main Page' />
                <h1 style={styles.h1}>Professional Golf Rankings</h1>
                <div style={styles.cardCont}>
                    {!isLoaded && golfData.length < 999 ? golfData.map(data => {
                        const { player_name, num_events, total_points, position } = data
                        return <InfoPage
                            key={position}
                            player_name={player_name}
                            position={'Position: ' + position}
                            num_events={'Events Played: ' + num_events}
                            total_points={'Total Points: ' + total_points}
                        />
                    }) : null
                    }
                </div>
            </main>

        )
    }
}
export default Main

const styles = {
    cardCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        width: '100%'
    },
    h1: {
        color: 'silver'
    }
}