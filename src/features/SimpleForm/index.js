import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Select, MenuItem, FormControl, Modal, InputLabel, Button, Typography, withStyles, CircularProgress } from '@material-ui/core/'
import MuiAlert from '@material-ui/lab/Alert';

import { closeSimpleForm, simpleFormSubmit } from './redux/simpleFormActions'

const styles = theme => ({
    alert: {
        marginBottom: '10px'
    },
    simpleForm: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        zIndex: '100',
        width: '90%',
        maxWidth: '750px',
        borderRadius: '15px',
        padding: '17px 10px',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: 'rgb(255, 255, 255)',
    },
    simpleFormInputField: {
        width: '85%',
        marginBottom: '15px'
    },
    loadingContainer: {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        borderRadius: '15px',
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'rgba(255, 255, 255, 0.75)',
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
        const { isSimpleFormOpen, closeSimpleForm, simpleFormSubmit, simpleFormError, classes, isSubmitting } = this.props

        return (
            <Modal open={isSimpleFormOpen} onClose={closeSimpleForm}>
                <div className={classes.simpleForm}>
                    {simpleFormError ? <MuiAlert className={classes.alert} elevation={6} variant="filled" severity='error'>{simpleFormError}</MuiAlert> : null}
                    <Typography variant='h5' style={{ marginBottom: '15px' }}>
                        Explore Your Community
                    </Typography>
                    <TextField
                        label="Name"
                        variant="filled"
                        className={classes.simpleFormInputField}
                        onChange={(text) => this.handleChange(text, 'name')} />
                    <TextField
                        label="Email"
                        variant="filled"
                        className={classes.simpleFormInputField}
                        onChange={(text) => this.handleChange(text, 'email')} />
                    <TextField
                        label="Phone"
                        variant="filled"
                        className={classes.simpleFormInputField}
                        onChange={(text) => this.handleChange(text, 'phone')} />
                    <FormControl variant='filled' className={classes.simpleFormInputField}>
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
                    {isSubmitting ? <div className={classes.loadingContainer}><CircularProgress color='primary' /></div> : null}
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({ simpleForm }) => {
    const { isSimpleFormOpen, simpleFormError, isSubmitting } = simpleForm
    return { isSimpleFormOpen, simpleFormError, isSubmitting }
}


export default connect(mapStateToProps, { closeSimpleForm, simpleFormSubmit })(withStyles(styles)(SimpleForm))