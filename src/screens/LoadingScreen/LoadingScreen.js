import { CircularProgress, withStyles } from '@material-ui/core'
import React, { Component } from 'react'

const styles = theme => ({
    loadingContainer: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column'
    },
    loadingCircle: {
        color: '#fff'
    }
})

class LoadingScreen extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.loadingContainer}>
                <h2 style={{ color: 'white' }}>Loading...</h2>
                <CircularProgress className={classes.loadingCircle}/>
            </div>
        )
    }
}

export default withStyles(styles)(LoadingScreen)