import { connect } from 'react-redux'
import React, { Component } from 'react'
import { withStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';

import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        flexGrow: 1,
        position: 'static',
        left: 0,
        bottom: 0,
        width: '100%',
        boxShadow: '0px 0 10px rgba(0, 0, 0, 0.4)',
    },
    footer: {
        backgroundColor: '#a8d5d7'
    },
    footerLink: {
        textDecoration: 'none',
        fontWeight: '500',
        color: 'rgba(0, 0, 0, 0.5)',
        padding: '6px 9px',
        borderRadius: '2px',
        transition: 'all 0.2s',
        '&:hover': {
            backgroundColor: 'rgba(255, 255, 255, 0.7)',
            color: 'black',
        }
    },
    copyright: {
        color: 'black',
        fontWeight: '500'
    }
});

class Footer extends Component {
    render() {
        const { classes } = this.props
        return (
            <div className={classes.root}>
                <AppBar position="static" className={classes.footer}>
                    <Toolbar style={{justifyContent: 'space-between'}}>
                        <Link to='/admin' className={classes.footerLink}>
                            Admin Login
                        </Link>
                        <Typography variant="subtitle1" className={classes.copyright}>
                            ©2021 DaddyJack
                        </Typography>
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default connect()(withStyles(styles)(Footer))