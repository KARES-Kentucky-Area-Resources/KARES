import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Button, Typography } from '@material-ui/core/'
import MuiAlert from '@material-ui/lab/Alert';
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
        const { userSignIn, error } = this.props
        const { email, password } = this.state
        return (
            <div className='authFormMain'>
                <div className='authFormForm'>
                    <Typography variant='h4'>
                        Admin Login
                    </Typography>
                    <br/>
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
                { error ? <MuiAlert elevation={6} variant="filled" severity='error'>{error}</MuiAlert>: null}
            </div>
        )
    }
}

const mapStateToProps = ({ authorization }) => {
    const { meta } = authorization
    const { error } = meta
    return { error }
}

export default connect(mapStateToProps, { userSignIn })(Authorization)