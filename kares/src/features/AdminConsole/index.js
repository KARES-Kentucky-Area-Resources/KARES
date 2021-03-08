import { AppBar, Button, Toolbar } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import ResourceForm from '../ResourceForm'
import { openResourceForm, closeResourceForm } from '../ResourceForm/redux/resourceFormActions'

class AdminConsole extends Component {

    render() {
        const { isResourceFormOpen, closeResourceForm, openResourceForm } = this.props
        return (
            <div>
                <ResourceForm />
                <AppBar>
                    <Toolbar>
                        <p>Admin Console</p>
                    </Toolbar>
                </AppBar>
                <div style={{marginTop: '75px'}}>

                </div>
                <Button variant='contained' color='primary' onClick={isResourceFormOpen ? closeResourceForm : openResourceForm}>Create New Resource</Button>
            </div>
        )
    }
}

const mapStateToProps = ({ resourceForm }) => {
    const { isResourceFormOpen } = resourceForm
    return { isResourceFormOpen }
}

export default connect(mapStateToProps, { openResourceForm, closeResourceForm })(AdminConsole)