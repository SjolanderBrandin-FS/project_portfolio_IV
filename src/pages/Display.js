import React, { Component } from 'react'
import InfoPage from '../components/InfoPage'

class Settings extends Component {
    state = {
        userData: [],
        isLoaded: true
    }
    // function Settings(){
    // const [userData] = useState([])
    // const [isLoaded] = useState([{ isLoaded: true }])

    componentDidMount() {
        const profile = this.state.isLoaded
        if (profile) {
            this.fetchData()
        } else {
            console.log(`Can not load the Settings Page`)
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
        fetch('https://api.golfbert.com/v1/courses/4803/holes', options)
            .then(response => response.json())
            // .catch(err =>{
            //  console.log(`The error - ${err} has occured`);   
            // })
            // Now Map through the Array
            .then(responseJSON => responseJSON.results.map(data => ({
                //setGolfData({
                id: `${data.id}`,
                number: `${data.number}`,
                courseID: `${data.courseid}`,
                rotation: `${data.rotation}`
            }
            )))
            .then(golfData => this.setState({
                golfData,
                isLoaded: false
            }))
            .catch(err => console.log(err))

    }

    // useEffect(() => {
    //     const url = 'https://randomuser.me/api/'

    //     const fetchData = async () => {
    //         try {
    //             const response = await fetch(url)
    //             const json = await response.json()
    //             console.log(json.slip.userData)
    //             isLoaded(json.slip.userData)
    //         } catch (error) {
    //             console.log('error', error)
    //         }
    //     }
    //     fetchData(url)
    //         .catch(err => {
    //             console.log(`The error - ${err} has occured`)
    //         })
    //         .then(responseJSON => responseJSON.results.map(user => ({
    //             userData: {
    //                 firstName: `${user.name.first}`,
    //                 lastName: `${user.name.last}`,
    //                 street: `${user.location.street}`,
    //                 city: `${user.location.city}`,
    //                 state: `${user.location.state}`,
    //                 postcode: `${user.location.postcode}`,
    //                 username: `${user.login.username}`,
    //                 password: `${user.login.password}`,
    //                 phone: `${user.phone}`,
    //                 picture: `${user.picture.large}`,
    //             }
    //         })))

    // })
    render() {
        const { isLoaded, golfData } = this.state
        return (
            <section style={styles.container} >
                <h1 style={styles.h1}>Display</h1>
                {!isLoaded && golfData.length > 0 ? golfData.map(data => {
                    const { number, courseid, rotation, id } = data
                    return <InfoPage
                        key={id}
                        Number={number}
                        courseID={courseid}
                        Rotation={rotation}
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
        height: '100rem',
        color: '#25A5D0'
    },
    h1: {
        color: '#25A5D0'
    }
}