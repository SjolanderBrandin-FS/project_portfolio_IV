import React, { Component } from 'react'
import FavCard from '../components/FavCard';

class Favorites extends Component {
    state = {
        favList: [],
        isLoaded: true
    }

    // Needs to have a row of your 5-10 favorite players, 
    // saved to an array that loads when the page does.

    componentDidMount = () => {
        let str = localStorage.getItem("myGolfData");
        let favoriteData = JSON.parse(str) || [];
        this.setState({ favList: favoriteData });
    }

    onRemoveClick = (rList) => {
        console.log("RemoveClick", rList);
        const newRList = [...this.state.favList]
        newRList.splice(rList.player_id, 1)
        this.setState(() => ({
            favList: newRList
        }))

    }

    render() {
        return (
            <main style={styles.container}>
                <h1 style={styles.h1}>Favorites</h1>
                <ul style={styles.cardCont}>
                    {
                        this.state.favList.map(pData => {
                            const { player_id, player_name, num_events, total_points, position } = pData
                            return <FavCard
                                key={player_id}
                                player_name={player_name}
                                position={position}
                                num_events={num_events}
                                total_points={total_points}
                                is_favorite={true}
                                remove_click={() => { this.onRemoveClick(pData.player_id) }}
                            />
                        })
                    }

                </ul>
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
        height: 'auto',
        overflow: 'scroll'

    },
    cardCont: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        flexWrap: 'wrap',
        height: '78vh'
    },
    h1: {
        color: 'silver',
        fontStyle: 'italic',
        fontWeight: 'normal'
    }
}