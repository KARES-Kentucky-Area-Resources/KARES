import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResourceForm from '../ResourceForm'
import VisitorsTable from '../VisitorsTable'
import { loadAllVisitors, filterFetchedVisitors } from '../VisitorsTable/redux/visitorsTableActions'
import { openResourceForm, closeResourceForm } from '../ResourceForm/redux/resourceFormActions'
import { Button, CircularProgress } from '@material-ui/core'
import { withStyles } from '@material-ui/core/styles'

import './VisitorConsole.css'
import VisitorsFilter from '../VisitorsFilter'
import { Link } from 'react-router-dom'

const styles = theme => ({
    root: {
        flexGrow: 1
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
    backButton: {
        margin: '23px',
        marginBottom: '10px',
        
        '& a': {
            textDecoration: 'none',
            color: 'black'
        }
    }
})


class VisitorConsole extends Component {

    componentDidMount() {
        this.props.loadAllVisitors()
        this.props.filterFetchedVisitors(this.props.allVisitors)
    }

    render() {
        const { classes, isLoading } = this.props
        return (
            <div className={classes.mainContainer}>

                {/* <Button
                    variant='contained'
                    color='primary'
                    className={classes.adminButton}
                    onClick={isResourceFormOpen ? closeResourceForm : openResourceForm}>
                    Create New Resource
                 </Button> */}

                <Button
                    variant='contained'
                    className={classes.backButton}>
                        <Link to='/admin'>Back</Link>
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

export default connect(mapStateToProps, { openResourceForm, closeResourceForm, loadAllVisitors, filterFetchedVisitors })(withStyles(styles)(VisitorConsole))