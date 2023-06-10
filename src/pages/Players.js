import React, { Component } from 'react'
import InfoCard from '../components/InfoCard'

class Players extends Component {
    state = {
        golfData: [],
        isLoaded: true,
        limit: 10
    }


    componentDidMount() {
        const profile = this.state.isLoaded
        if (profile) {
            this.fetchData();
            console.log('Main Page Loaded');
        }
        else {
            console.log('Can not load the Main Page')
        }

    }


    fetchData() {
        this.setState({
            isLoaded: true,
            golfData: []
        })
        const url = process.env.PUBLIC_URL + "/data.json";
        const options = {
            method: 'GET',
            headers: {
                'X-RapidAPI-Key': '8e2b8720f7msh75b3d3b8392692cp1c0f74jsnc9d76f29a527',
                'X-RapidAPI-Host': 'golf-leaderboard-data.p.rapidapi.com'
            }
        };
        fetch(url, options)
            .then(response => response.json())
            .then(responseJSON => responseJSON.results.rankings.map(data => {
                // console.log(data)
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
    onFavoriteClick = (pData) => {
        console.log("FavoriteClick", pData);
        let str = localStorage.getItem("myGolfData")
        let favoriteData = JSON.parse(str) || []
        if (!pData.player_name === favoriteData.player_name || favoriteData.length <= 9) {
            favoriteData.push(pData)
            localStorage.setItem("myGolfData", JSON.stringify(favoriteData))
            console.log(favoriteData)
        } else {
            console.log("Player already added to Favorites")
            alert("Player already added to Favorites or You already have 10 favorites saved.")
        }

    }
    incrementLimit = () => {
        let newLimit = this.state.limit + 10;
        this.setState({ limit: newLimit });
        this.render();
    }
    render() {
        return (
            <main style={styles.container}>
                <h1 style={styles.h1}>Professional Golf Rankings</h1>
                <div style={styles.cardCont}>
                    {this.state.golfData.slice(0, this.state.limit).map(data => {
                        const { player_id, player_name, num_events, total_points, position } = data
                        return <InfoCard
                            key={player_id}
                            player_name={player_name}
                            position={position}
                            num_events={num_events}
                            total_points={total_points}
                            is_favorite={false}
                            //fav_click written this way to pass in properties.
                            favorite_click={() => { this.onFavoriteClick(data) }}
                        />
                    })
                    }
                </div>
                <div style={styles.btnCon}>
                    <button onClick={this.incrementLimit} style={styles.btn}>Show More...</button>
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
        height: 'auto',


    },
    cardCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '81vh',
        overflow: 'scroll'
    },
    h1: {
        color: 'silver',
        fontStyle: 'italic',
        fontWeight: 'normal'
    },
    btn: {
        fontSize: '20px',
        backgroundColor: 'lightgrey',
        color: '#0B3954',
        margin: '5px',
        padding: '5px',
        height: '35px',
        width: '300px',
        border: '1px solid #464646',
        borderRadius: '15px',
        cursor: 'pointer',
        boxShadow: '0 4px 8px 0 silver'

    },
    btnCon: {
        display: 'block',
        justifyContent: 'flex-center'

    }
}