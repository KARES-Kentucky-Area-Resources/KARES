import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Button, Typography, withStyles, CircularProgress } from '@material-ui/core/'
import MuiAlert from '@material-ui/lab/Alert'
import { userSignIn } from './redux/authorizationActions'

const styles = theme => ({
    authFormMain: {
        width: '100vw',
        height: '100vh',
        position: 'absolute',
        top: '0',
        left: '0',
    },
    authFormForm: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
        width: '90%',
        maxWidth: '750px',
        borderRadius: '15px',
        padding: '17px 10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    authFormTextField: {
        width: '90%',
        marginBottom: '15px'
    },
    loadingContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
    },
    backButton: {
        position: 'absolute',
        top: '0',
        left: '0',
        marginTop: '20px',
        marginLeft: '20px'
    },
    error: {
        marginBottom: '10px'
    }
})

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

    renderError(error) {
        if (error === 'User logged out successfully!') {
            return (<MuiAlert className={this.props.classes.error} elevation={6} variant="filled" severity='success'>{error}</MuiAlert>)
        } else {
            return (<MuiAlert className={this.props.classes.error} elevation={6} variant="filled" severity='error'>{error}</MuiAlert>)
        }
    }

    render() {
        const { userSignIn, error, classes, loggingIn } = this.props
        const { email, password } = this.state
        return (
            <div className={classes.authFormMain}>
                    <Button variant="contained" href='/' className={classes.backButton}>
                        Back
                    </Button>
                <div className={classes.authFormForm}>
                    { error ? this.renderError(error): null}
                    <Typography variant='h4'>
                        Admin Login
                    </Typography>
                    <br/>
                    <TextField
                        label="Email Address"
                        variant="filled"
                        className={classes.authFormTextField}
                        onChange={(text) => this.handleTextChange(text, 'email')} />
                    <TextField
                        label="Password"
                        variant="filled"
                        className={classes.authFormTextField}
                        type='password'
                        onChange={(text) => this.handleTextChange(text, 'password')} />
                    <Button variant="contained" color="primary" onClick={() => userSignIn(email, password)}>
                        Sign In
                    </Button>
                    { loggingIn ? <div className={classes.loadingContainer}><CircularProgress color='primary'/></div> : null }
                </div>
            </div>
        )
    }
}

const mapStateToProps = ({ authorization }) => {
    const { meta } = authorization
    const { error, loggingIn } = meta
    return { error, loggingIn }
}

export default connect(mapStateToProps, { userSignIn })(withStyles(styles)(Authorization))