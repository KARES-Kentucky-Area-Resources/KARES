import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Select, MenuItem, FormControl, Modal, InputLabel, Button, Typography } from '@material-ui/core/'
import { closeResourceForm, resourceFormSubmit } from './redux/resourceActions'
import MuiAlert from '@material-ui/lab/Alert';



class ResourceForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            county: '',
            name: '',
            phone: '',
            address: '',
            website1: '',
            website2: '',
            meeting_time: '',
            tag: ''
        }
    }

    handleChange = (text, key) => {
        this.setState({ [key]: text.target.value })
    }


    render() {
        const { county, name, phone, address, website1, website2, meeting_time, tag } = this.state
        const { isResourceFormOpen, closeResourceForm, resourceFormSubmit, resourceFormError } = this.props

        return (
            <Modal open={isResourceFormOpen} onClose={closeResourceForm}>
                <div className='simpleFormForm'>
                {resourceFormError ? <MuiAlert style={{marginBottom: '15px'}} elevation={6} variant="filled" severity='error'>{resourceFormError}</MuiAlert> : null}
                    <Typography variant='h5' style={{ marginBottom: '15px' }}>
                        Add new Resource
                    </Typography>
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
                    <TextField
                        label="Name"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'name')} />
                    <TextField
                        label="Phone"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'phone')} />
                    <TextField
                        label="Address"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'address')} />
                    <TextField
                        label="Website1"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'website1')} />
                    <TextField
                        label="Website2"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'website2')} />
                    <TextField
                        label="Meeting Time"
                        variant="filled"
                        className='simpleFormInputField'
                        onChange={(text) => this.handleChange(text, 'meeting_time')} />

                    <FormControl variant='filled' className='simpleFormInputField'>
                        <InputLabel>Tag</InputLabel>
                        <Select
                            value={tag}
                            onChange={(val) => this.handleChange(val, 'tag')}
                        >
                            <MenuItem value={'mental-drug-alch'}>Mental, Drug, Alcohol Treatment</MenuItem>
                            <MenuItem value={'substance-abuse'}>Substance Abuse</MenuItem>
                            <MenuItem value={'domestic-violence'}>Domestic Violence</MenuItem>
                            <MenuItem value={'suicide-prevention'}>Suicide Prevention</MenuItem>
                            <MenuItem value={'sex-offender-assistance'}>Sex Offender Assistance</MenuItem>
                            <MenuItem value={'gov-assistance'}>Gov. Assistance</MenuItem>
                            <MenuItem value={'career-training'}>Career Training</MenuItem>
                            <MenuItem value={'transportation'}>Transportation</MenuItem>
                            <MenuItem value={'food-bank'}>Food Bank</MenuItem>
                            <MenuItem value={'financial-assistance'}>Financial Assistance</MenuItem>
                            <MenuItem value={'faith-based'}>Faith Based</MenuItem>
                            <MenuItem value={'housing'}>Housing</MenuItem>
                            <MenuItem value={'child-care'}>Child Care</MenuItem>
                            <MenuItem value={'health-care'}>Health Care</MenuItem>
                            <MenuItem value={'medication-assistance'}>Medication Assistance</MenuItem>
                            <MenuItem value={'legal-assistance'}>Legal Assistance</MenuItem>
                            <MenuItem value={'local-gov-offices'}>Local Gov. Offices</MenuItem>
                        </Select>
                    </FormControl>


                    <Button variant="contained" color="primary" onClick={() => resourceFormSubmit({ county, name, phone, address, website1, website2, meeting_time, tag })}>
                        Add
                    </Button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({ resourceForm }) => {
    const { isResourceFormOpen, resourceFormError } = resourceForm
    return { isResourceFormOpen, resourceFormError }
}


export default connect(mapStateToProps, { closeResourceForm, resourceFormSubmit })(ResourceForm)