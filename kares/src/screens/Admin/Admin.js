import React, { Component } from 'react'
import { AppBar, Toolbar, withStyles, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { logOut } from '../../features/Authorization/redux/authorizationActions'
import VisitorConsole from '../../features/VisitorConsole'
import Authorization from '../../features/Authorization'
import AdminOptions from '../../features/AdminOptions'

const styles = theme => ({
    navbar: {
        color: 'white',
        position: 'static',
        fontWeight: '500',
    },
    toolbar: {
        display: 'flex',
        justifyContent: 'space-between'
    }
})

class Admin extends Component {
    render() {
        const { loggedIn, classes, logOut } = this.props
        const page = this.props.page.match.params.page
        return (
            <div>
                { loggedIn ?
                    <div>
                        <AppBar className={classes.navbar}>
                            <Toolbar className={classes.toolbar}>
                                <p>Admin Console</p>
                                <Button variant='contained' onClick={() => logOut()}>
                                    Log Out
                                </Button>
                            </Toolbar>
                        </AppBar>
                        {!page ? <AdminOptions /> : null}
                        {page === 'visitor' ? <VisitorConsole /> : null}
                    </div>
                    :
                    <Authorization />
                }
            </div>
        )
    }
}

const mapStateToProps = ({ authorization }) => {
    const { loggedIn, user } = authorization
    return { user, loggedIn }
}


export default connect(mapStateToProps, { logOut })(withStyles(styles)(Admin))