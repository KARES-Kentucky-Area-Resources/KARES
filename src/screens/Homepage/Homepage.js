import React, { Component } from 'react'
import Navbar from '../../features/Navbar'
import Footer from '../../features/Footer'
import './Homepage.css'
import KaresLogo from '../../shared/img/Kares_Logo.png'
import SimpleForm from '../../features/SimpleForm'
import { connect } from 'react-redux'
import { openSimpleForm, closeSimpleForm } from '../../features/SimpleForm/redux/simpleFormActions'



class Homepage extends Component {
    render() {
        const { openSimpleForm, closeSimpleForm, isSimpleFormOpen } = this.props
        return (
            <div style={{height: '100vh'}}>
                <Navbar />

                <div className='homepageContainer top'>
                    <div className='outerRing'>
                        <div className='innerRing' onClick={isSimpleFormOpen ? closeSimpleForm : openSimpleForm}>
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

                <SimpleForm />
                <Footer />
            </div>
        )
    }
}

const mapStateToProps = ({ simpleForm }) => {
    const { isSimpleFormOpen } = simpleForm
    return { isSimpleFormOpen }
}

export default connect(mapStateToProps, { openSimpleForm, closeSimpleForm })(Homepage)