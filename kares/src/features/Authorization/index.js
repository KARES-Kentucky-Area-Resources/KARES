import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Button } from '@material-ui/core/'
import './Authorization.css'

import { userSignIn } from './redux/authorizationActions'

class Authorization extends Component {
    constructor(props) {
        super(props)
        this.state = {
            email: '',
            password: ''
        }
    }

    handleTextChange = (text, key) => {
        this.setState({ [key]: text.target.value })
    }

    render() {
        const { userSignIn } = this.props
        const { email, password } = this.state
        return (
            <div className='authFormMain'>
                <div className='authFormForm'>
                    <TextField
                        label="Email Address"
                        variant="filled"
                        className='authFormTextField'
                        onChange={(text) => this.handleTextChange(text, 'email')} />
                    <TextField
                        label="Password"
                        variant="filled"
                        className='authFormTextField'
                        type='password'
                        onChange={(text) => this.handleTextChange(text, 'password')} />
                    <Button variant="contained" color="primary" onClick={() => userSignIn(email, password)}>
                        Sign In
                    </Button>
                </div>
            </div>
        )
    }
}

export default connect(null, { userSignIn })(Authorization)