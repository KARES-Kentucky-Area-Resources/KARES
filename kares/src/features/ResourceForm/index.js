import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Select, MenuItem, FormControl, Modal, InputLabel, Button, Typography } from '@material-ui/core/'
import { closeResourceForm, resourceFormSubmit } from './redux/resourceFormActions'




class ResourceForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            county: 'none',
            name: null,
            phone: null,
            address: null,
            website1: null,
            website2: null,
            meeting_time: null,
            tag: 'none'
        }
    }

    handleChange = (text, key) => {
        this.setState({ [key]: text.target.value })
    }


    render() {
        const { county, name, phone, address, website1, website2, meeting_time, tag } = this.state
        const { isResourceFormOpen, closeResourceForm, resourceFormSubmit } = this.props

        return (
            <Modal open={isResourceFormOpen} onClose={closeResourceForm}>
                <div className='simpleFormForm'>
                    <FormControl variant='filled' className='simpleFormInputField'>
                        <InputLabel>County</InputLabel>
                        <Select
                            value={county}
                            onChange={(val) => this.handleChange(val, 'county')}
                        >
                            <MenuItem value={'none'}>None</MenuItem>
                            <MenuItem value={'Allen County'}>Allen County</MenuItem>
                            <MenuItem value={'Russell County'}>Russell County</MenuItem>
                            <MenuItem value={'Barren County'}>Barren County</MenuItem>
                            <MenuItem value={'Metcalfe County'}>Metcalfe County</MenuItem>
                            <MenuItem value={'Edmonson County'}>Edmonson County</MenuItem>
                            <MenuItem value={'Green County'}>Green County</MenuItem>
                            <MenuItem value={'Warren County'}>Warren County</MenuItem>
                        </Select>
                    </FormControl>
                    <Typography variant='h5' style={{ marginBottom: '15px' }}>
                        Add new Resource
                    </Typography>
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
                            <MenuItem value={'none'}>None</MenuItem>
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


                    <Button variant="contained" color="primary" onClick={() => resourceFormSubmit({county, name, phone, address, website1, website2, meeting_time, tag})}>
                        Add
                    </Button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({ resourceForm }) => {
    const { isResourceFormOpen } = resourceForm
    return { isResourceFormOpen }
}


export default connect(mapStateToProps, { closeResourceForm, resourceFormSubmit })(ResourceForm)