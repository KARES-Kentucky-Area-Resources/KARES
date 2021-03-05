import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, Select, MenuItem, FormControl, Modal, InputLabel, Button } from '@material-ui/core/'
import './SimpleForm.css'

import { closeSimpleForm } from './redux/simpleFormActions'


class SimpleForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: null,
            email: null,
            phone: null,
            county: 'allen'
        }
    }

    handleChange = (text, key) => {
        this.setState({ [key]: text.target.value })
    }


    render() {
        const { county } = this.state
        const { isSimpleFormOpen, closeSimpleForm } = this.props
        return (
            <Modal open={isSimpleFormOpen} onClose={closeSimpleForm}>
                <div className='simpleFormForm'>
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
                            <MenuItem value={'allen'}>Allen County</MenuItem>
                            <MenuItem value={'russell'}>Russell County</MenuItem>
                            <MenuItem value={'barren'}>Barren County</MenuItem>
                            <MenuItem value={'metcalfe'}>Metcalfe County</MenuItem>
                            <MenuItem value={'edmonson'}>Edmonson County</MenuItem>
                            <MenuItem value={'green'}>Green County</MenuItem>
                            <MenuItem value={'warren'}>Warren County</MenuItem>
                        </Select>
                    </FormControl>
                    <Button variant="contained" color="primary">
                        Continue
                    </Button>
                </div>
            </Modal>
        )
    }
}

const mapStateToProps = ({ simpleForm }) => {
    const { isSimpleFormOpen } = simpleForm
    return { isSimpleFormOpen }
}


export default connect(mapStateToProps, { closeSimpleForm })(SimpleForm)