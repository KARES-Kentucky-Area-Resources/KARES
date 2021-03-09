import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResourceForm from '../ResourceForm'
import VisitorsTable from '../VisitorsTable'
import { loadAllVisitors } from '../VisitorsTable/redux/visitorsTableActions'
import { openResourceForm, closeResourceForm } from '../ResourceForm/redux/resourceFormActions'
import { AppBar, Button, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import './AdminConsole.css'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    navbar: {
        backgroundColor: '#a8d5d7',
        color: 'black',
        position: 'static',
        fontWeight: '500',
    },
    adminButton: {
        backgroundColor: '#a8d5d7',
        color: 'black',
        transition: 'all 0.25s',
        fontWeight: '500',

        '&:hover': {
            backgroundColor: '#659294',
            color: 'white'
        }
    },
    mainContainer: {
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.15);'
    }
})


class AdminConsole extends Component {

    componentDidMount() {
        this.props.loadAllVisitors()
    }

    render() {
        const { isResourceFormOpen, closeResourceForm, openResourceForm, loadAllVisitors, classes } = this.props
        return (
            <div className={classes.mainContainer}>
                <AppBar className={classes.navbar}>
                    <Toolbar>
                        <p>Admin Console</p>
                    </Toolbar>
                </AppBar>

                <div className='adminButtons'>
                    <Button
                        variant='contained'
                        color='secondary'
                        className={classes.adminButton}
                        onClick={isResourceFormOpen ? closeResourceForm : openResourceForm}>
                        Create New Resource
                    </Button>

                    <Button
                        variant='contained'
                        color='secondary'
                        className={classes.adminButton}
                        onClick={loadAllVisitors}>
                        Reload Visitors
                    </Button>
                </div>

                <VisitorsTable />

                <ResourceForm />
            </div>
        )
    }
}

const mapStateToProps = ({ resourceForm }) => {
    const { isResourceFormOpen } = resourceForm
    return { isResourceFormOpen }
}

export default connect(mapStateToProps, { openResourceForm, closeResourceForm, loadAllVisitors })(withStyles(styles)(AdminConsole))