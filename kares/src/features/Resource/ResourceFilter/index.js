import { withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'

const styles = theme => ({
    filterContainer: {
        marginTop: '15px',
        display: 'flex',
        backgroundColor: 'white',
        maxWidth: '1000px',
        width: '97%',
        padding: '13px 0',
        margin: '0 auto',
        borderRadius: '5px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    formField: {
        maxWidth: '325px',
        minWidth: '200px',
        marginBottom: '10px'
    }
})

class ResourceFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            tag: 'All',
            county: 'All'
        }
    }

    handleChange = (text, key) => {
        this.setState({ [key]: text.target.value })
    }

    render() {
        const { classes } = this.props
        const { name, tag, county } = this.state
        return (
            <div className={classes.filterContainer}>
                <TextField
                    label="Name"
                    variant="outlined"
                    color='primary'
                    className={classes.formField}
                    value={name}
                    onChange={(text) => this.handleChange(text, 'name')} />

                <FormControl variant='outlined' className={classes.formField}>
                    <InputLabel>Tag</InputLabel>
                    <Select
                        value={tag}
                        onChange={(val) => this.handleChange(val, 'tag')}
                        label="Tag"
                    >
                        <MenuItem value='All'>All</MenuItem>
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

                <FormControl variant='outlined' className={classes.formField}>
                    <InputLabel>County</InputLabel>
                    <Select
                        value={county}
                        onChange={(val) => this.handleChange(val, 'county')}
                        label='county'
                    >
                        <MenuItem value={'All'}>All</MenuItem>
                        <MenuItem value={'Allen County'}>Allen County</MenuItem>
                        <MenuItem value={'Russell County'}>Russell County</MenuItem>
                        <MenuItem value={'Barren County'}>Barren County</MenuItem>
                        <MenuItem value={'Metcalfe County'}>Metcalfe County</MenuItem>
                        <MenuItem value={'Edmonson County'}>Edmonson County</MenuItem>
                        <MenuItem value={'Green County'}>Green County</MenuItem>
                        <MenuItem value={'Warren County'}>Warren County</MenuItem>
                    </Select>
                </FormControl>
            </div>
        )
    }
}

export default connect(null, null)(withStyles(styles)(ResourceFilter))