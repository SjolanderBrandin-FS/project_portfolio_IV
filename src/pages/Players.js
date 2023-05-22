import React, { Component } from 'react'
import InfoCard from '../components/InfoCard'

class Players extends Component {
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
                'X-RapidAPI-Key': '8e2b8720f7msh75b3d3b8392692cp1c0f74jsnc9d76f29a527',
                'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(responseJSON => responseJSON.results.rankings.map((data) => {
                console.log(data)
                return {
                    player_id: `${data.player_id}`,
                    player_name: `${data.player_name}`,
                    num_events: `${data.num_events}`,
                    total_points: `${data.total_points}`,
                    position: `${data.position}`
                }
            }))
            .then(golfData => this.setState({
                golfData,
                isLoaded: false
            }))
            .catch(err => console.log(err))

    }

    // Needs limit to amount called then add a view more button

    // Need to add click function to 'add' button
    // when press, it will add the player card to the favorites page/array.


    render() {
        const { isLoaded, golfData } = this.state
        return (
            <main style={styles.container}>
                <h1 style={styles.h1}>Professional Golf Rankings</h1>
                <div style={styles.cardCont}>
                    {!isLoaded && golfData.length < 999 ? golfData.map((data) => {



                        const { player_id, player_name, num_events, total_points, position } = data
                        return <InfoCard
                            key={player_id}
                            player_name={player_name}
                            position={position}
                            num_events={num_events}
                            total_points={total_points}
                        />
                    }) : null
                    }
                </div>
            </main>

        )
    }
}
export default Players

// Added Scroll function for overflow. Still need limit on array output.

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        textAlign: 'center',
        height: '90vh',
        overflow: 'scroll'

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