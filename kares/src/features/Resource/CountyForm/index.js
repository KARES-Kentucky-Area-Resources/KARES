import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Modal, Button, Typography } from '@material-ui/core/'
import { addCounty, closeCountyForm, openCountyForm } from '../ResourceForm/redux/resourceActions'




class CountyForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            county: 'none'
        }
    }

    handleChange = (text, key) => {
        this.setState({ [key]: text.target.value })
    }


    render() {
        const { county } = this.state
        const { openCountyForm, closeCountyForm, isCountyFormOpen, addCounty } = this.props

        return (
            <Modal open={isCountyFormOpen} onClose={closeCountyForm}>
                <div className='simpleFormForm'>
                    <Typography variant='h5' style={{ marginBottom: '15px' }}>
                        Add New County
                    </Typography>
                    <TextField
                        label="Name"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'name')} />

                    <Button variant="contained" color="primary" onClick={() => console.log()}>
                        Add
                    </Button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({ resourceForm }) => {
    const { isCountyFormOpen } = resourceForm
    return { isCountyFormOpen }
}


export default connect(mapStateToProps, { addCounty, openCountyForm, closeCountyForm })(CountyForm)