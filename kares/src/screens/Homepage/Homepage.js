import React, { Component } from 'react'
import Navbar from '../../features/Navbar'
import Footer from '../../features/Navbar/Footer'
import './Homepage.css'
import KaresLogo from '../../shared/img/Kares_Logo.png'


class Homepage extends Component {
    render() {
        return (
            <div style={{height: '100vh'}}>
                <Navbar />

                <div className='homepageContainer top'>
                    <div className='outerRing'>
                        <div className='innerRing'>
                            <p>Explore</p>
                            <img src={KaresLogo} alt='logo' style={{width: '50%'}} />
                            <p>In Your Community</p>
                        </div>
                    </div>
                </div>

                <hr style={{margin: 0, border: '1px solid black'}}/>

                <div className='homepageContainer bottom'>
                    <div className='outerRing'>
                        <div className='innerRing'>
                            <hr></hr>
                            <p>Request Assistance</p>
                            <hr></hr>
                        </div>
                    </div>
                </div>

                <Footer />
            </div>
        )
    }
}

export default Homepage