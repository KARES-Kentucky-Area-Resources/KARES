import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResourceForm from '../ResourceForm'
import VisitorsTable from '../VisitorsTable'
import { loadAllVisitors, filterFetchedVisitors } from '../VisitorsTable/redux/visitorsTableActions'
import { openResourceForm, closeResourceForm } from '../ResourceForm/redux/resourceFormActions'
import { AppBar, Button, CircularProgress, Toolbar } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import './AdminConsole.css'
import VisitorsFilter from '../VisitorsFilter'

const styles = theme => ({
    root: {
        flexGrow: 1
    },
    navbar: {
        color: 'white',
        position: 'static',
        fontWeight: '500',
    },
    mainContainer: {
        minHeight: '100vh',
        backgroundColor: 'rgba(0, 0, 0, 0.85);'
    },
    visitorsTable: {
        display: 'flex',
        margin: '20px auto',
        justifyContent: 'space-evenly'
    },
    table: {
        flexBasis: '70%'
    },
    tableActions: {
        flexBasis: '25%',
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column'
    },
    adminButton: {
        margin: '15px'
    }
})


class AdminConsole extends Component {

    componentDidMount() {
        this.props.loadAllVisitors()
        console.log(this.props.allVisitors)
        this.props.filterFetchedVisitors(this.props.allVisitors)
        console.log(this.props.tempVisitors)

    }

    render() {
        const { isResourceFormOpen, closeResourceForm, openResourceForm, classes, isLoading } = this.props
        return (
            <div className={classes.mainContainer}>
                <AppBar className={classes.navbar}>
                    <Toolbar>
                        <p>Admin Console</p>
                    </Toolbar>
                </AppBar>


                <Button
                    variant='contained'
                    color='primary'
                    className={classes.adminButton}
                    onClick={isResourceFormOpen ? closeResourceForm : openResourceForm}>
                    Create New Resource
                 </Button>

                {
                    isLoading ? <CircularProgress color='primary' /> :

                        <div className={classes.visitorsTable}>
                            <div className={classes.table}>
                                <VisitorsTable />
                            </div>
                            <div className={classes.tableActions}>
                                <VisitorsFilter />
                            </div>
                        </div>
                }





                <ResourceForm />
            </div>
        )
    }
}

const mapStateToProps = ({ resourceForm, visitorsTable }) => {
    const { isResourceFormOpen } = resourceForm
    const { isLoading, allVisitors, temp } = visitorsTable
    const { tempVisitors } = temp
    return { isResourceFormOpen, isLoading, allVisitors, tempVisitors }
}

export default connect(mapStateToProps, { openResourceForm, closeResourceForm, loadAllVisitors, filterFetchedVisitors })(withStyles(styles)(AdminConsole))