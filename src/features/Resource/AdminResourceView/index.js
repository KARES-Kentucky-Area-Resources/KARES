import { withStyles, Modal, Typography, FormControl, InputLabel, Select, MenuItem, TextField, Button } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { closeAdminResourceForm, updateResourceInfo, deleteResource } from '../AdminResourceView/redux/adminResourceViewActions'
import MuiAlert from '@material-ui/lab/Alert';

const styles = theme => ({
    actionButtons: {
        display: 'flex',
        
        '& button': {
            margin: '0 10px'
        }
    }
})

class AdminResourceView extends Component {
    constructor(props) {
        super(props)
        this.state = {
            county: this.props.formInfo.county,
            name: this.props.formInfo.name,
            phone: this.props.formInfo.phone,
            address: this.props.formInfo.address,
            website1: this.props.formInfo.website1,
            website2: this.props.formInfo.website2,
            meeting_time: this.props.formInfo.meeting_time,
            tag: this.props.formInfo.tag
        }
    }

    handleChange = (text, key) => {
        this.setState({ [key]: text.target.value })
    }


    render() {
        const { closeAdminResourceForm, isOpen, classes, updateResourceInfo, deleteResource, resourceViewError } = this.props
        const { county, name, phone, address, website1, website2, meeting_time, tag } = this.state
        return (
            <Modal open={isOpen} onClose={closeAdminResourceForm}>
                <div className='simpleFormForm'>
                {resourceViewError ? <MuiAlert style={{marginBottom: '15px'}} elevation={6} variant="filled" severity='error'>{resourceViewError}</MuiAlert> : null}
                    <Typography variant='h5' style={{ marginBottom: '15px' }}>
                        {name}
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
                        disabled
                        value={name}
                        onChange={(text) => this.handleChange(text, 'name')} />
                    <TextField
                        label="Phone"
                        variant="filled"
                        className='simpleFormInputField'
                        value={phone}
                        onChange={(text) => this.handleChange(text, 'phone')} />
                    <TextField
                        label="Address"
                        variant="filled"
                        className='simpleFormInputField'
                        value={address}
                        onChange={(text) => this.handleChange(text, 'address')} />
                    <TextField
                        label="Website1"
                        variant="filled"
                        className='simpleFormInputField'
                        value={website1}
                        onChange={(text) => this.handleChange(text, 'website1')} />
                    <TextField
                        label="Website2"
                        variant="filled"
                        className='simpleFormInputField'
                        value={website2}
                        onChange={(text) => this.handleChange(text, 'website2')} />
                    <TextField
                        label="Meeting Time"
                        variant="filled"
                        className='simpleFormInputField'
                        value={meeting_time}
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

                    <div className={classes.actionButtons}>
                        <Button variant="contained" color="primary" onClick={() => updateResourceInfo({county, name, phone, address, website1, website2, meeting_time, tag})}>
                            Save
                        </Button>
                        <Button variant="contained" color="secondary" onClick={() => deleteResource(name)}>
                            Delete
                        </Button>
                    </div>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({ adminResourceView }) => {
    const { isOpen, formInfo, resourceViewError } = adminResourceView
    return { isOpen, formInfo, resourceViewError }
}

export default connect(mapStateToProps, { closeAdminResourceForm, updateResourceInfo, deleteResource })(withStyles(styles)(AdminResourceView))