import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ResourceFilter from '../ResourceFilter'
import ResourceForm from '../ResourceForm'

import { openResourceForm } from '../ResourceForm/redux/resourceActions'
import ResourceTable from '../ResourceTable'

const styles = theme => ({
    backButton: {
        margin: '23px',
        marginBottom: '10px',

        '& a': {
            textDecoration: 'none',
            color: 'black'
        }
    },
    mainButtons: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap'
    },
    resourceButton: {
        margin: '10px',
        marginBottom: '10px',
    }
})

class ResourceConsole extends Component {

    render() {
        const { classes, openResourceForm } = this.props
        return (
            <div>
                <Button
                    variant='contained'
                    className={classes.backButton}>
                    <Link to='/admin'>Back</Link>
                </Button>
                <div className={classes.mainButtons}>
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.resourceButton}
                        onClick={openResourceForm}>
                        Create New Resource
                    </Button>
                </div>

                <div className={classes.resourceFilter}>
                    <ResourceFilter />
                </div> 
                <div className={classes.resourceTable}>
                    <ResourceTable />
                </div>

                <ResourceForm />
            </div>
        )
    }
}

const mapStateToProps = ({ resourceForm }) => {
    return {}
}

export default connect(mapStateToProps, { openResourceForm })(withStyles(styles)(ResourceConsole))