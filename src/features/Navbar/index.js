import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import KaresLogo from '../../shared/img/Kares_Logo.png'
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    navbar: {
        backgroundColor: '#a8d5d7',
        position: 'static'
    },
    logo: {
        height: '35px'
    }
})

class Navbar extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar className={classes.navbar}>
                    <Toolbar>
                        <Link to='/'><img className={classes.logo} src={KaresLogo} alt='logo' /></Link>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}


export default connect()(withStyles(styles)(Navbar))