import React, { Component } from 'react'
import { AppBar, Toolbar, withStyles, Button } from '@material-ui/core'
import { connect } from 'react-redux'
import { logOut } from '../../features/Admin/Authorization/redux/authorizationActions'
import VisitorConsole from '../../features/Admin/Visitors/VisitorConsole'
import Authorization from '../../features/Admin/Authorization'
import AdminOptions from '../../features/Admin/AdminOptions'
import ResourceConsole from '../../features/Admin/Resource/ResourceConsole'

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

    checkPage = () => {
        const page = this.props.page.match.params.page

        if (page === 'visitor') {
            return (<VisitorConsole />)
        } else if (page === 'resources') {
            return (<ResourceConsole />)
        } else return (<AdminOptions />)
    }

    render() {
        const { loggedIn, classes, logOut } = this.props
        
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
                        {this.checkPage()}
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