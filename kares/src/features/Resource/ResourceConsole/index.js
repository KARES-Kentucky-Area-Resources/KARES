import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'
import ResourceFilter from '../ResourceFilter'
import ResourceForm from '../ResourceForm'
import CountyForm from '../CountyForm'

import { openCountyForm, openResourceForm, setCounties } from '../ResourceForm/redux/resourceActions'

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

    componentDidMount() {
        this.props.setCounties()
    }

    render() {
        const { classes, openResourceForm, openCountyForm } = this.props
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
                    <Button
                        variant='contained'
                        color='primary'
                        className={classes.resourceButton}
                        onClick={openCountyForm}>
                        Create New County
                    </Button>
                </div>

                <div className={classes.resourceFilter}>
                    <ResourceFilter />
                </div> 
                <div className={classes.resourceTable}>

                </div>

                <ResourceForm />
                <CountyForm />
            </div>
        )
    }
}

const mapStateToProps = ({ resourceForm }) => {
    return {}
}

export default connect(mapStateToProps, { openCountyForm, openResourceForm, setCounties })(withStyles(styles)(ResourceConsole))