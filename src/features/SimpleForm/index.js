import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Select, MenuItem, FormControl, Modal, InputLabel, Button, Typography, withStyles } from '@material-ui/core/'
import MuiAlert from '@material-ui/lab/Alert';
import './SimpleForm.css'

import { closeSimpleForm, simpleFormSubmit } from './redux/simpleFormActions'

const styles = theme => ({
    alert: {
        marginBottom: '10px'
    }
})


class SimpleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            phone: null,
            county: ''
        }
    }

    handleChange = (text, key) => {
        this.setState({ [key]: text.target.value })
    }


    render() {
        const { name, email, phone, county } = this.state
        const { isSimpleFormOpen, closeSimpleForm, simpleFormSubmit, simpleFormError, classes } = this.props

        return (
            <Modal open={isSimpleFormOpen} onClose={closeSimpleForm}>
                <div className='simpleFormForm'>
                    {simpleFormError ? <MuiAlert className={classes.alert} elevation={6} variant="filled" severity='error'>{simpleFormError}</MuiAlert> : null}
                    <Typography variant='h5' style={{ marginBottom: '15px' }}>
                        Explore Your Community
                    </Typography>
                    <TextField
                        label="Name"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'name')} />
                    <TextField
                        label="Email"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'email')} />
                    <TextField
                        label="Phone"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'phone')} />
                    <FormControl variant='filled' className='simpleFormInputField'>
                        <InputLabel>County</InputLabel>
                        <Select
                            value={county}
                            onChange={(val) => this.handleChange(val, 'county')}
                        >
                            <MenuItem value={'Russell'}>Russell County</MenuItem>
                            <MenuItem value={'Barren'}>Barren County</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="primary" onClick={() => simpleFormSubmit({ name, phone, email, county })}>
                        Continue
                    </Button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({ simpleForm }) => {
    const { isSimpleFormOpen, simpleFormError } = simpleForm
    return { isSimpleFormOpen, simpleFormError }
}


export default connect(mapStateToProps, { closeSimpleForm, simpleFormSubmit })(withStyles(styles)(SimpleForm))