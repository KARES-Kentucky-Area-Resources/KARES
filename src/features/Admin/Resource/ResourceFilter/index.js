import { Button, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { TextField, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { applyResourceFilter } from '../ResourceTable/redux/resourceTableActions'

const styles = theme => ({
    filterContainer: {
        marginTop: '15px',
        display: 'flex',
        backgroundColor: 'white',
        maxWidth: '1000px',
        width: '90%',
        padding: '7px 13px',
        margin: '0 auto',
        borderRadius: '5px',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    formField: {
        width: '90%',
        maxWidth: '200px',
        margin: '10px'
    },
    formInputContainer: {
        display: 'flex',
        flexWrap: 'wrap',
        justifyContent: 'space-evenly',
        width: '100%'
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
        const { classes, applyResourceFilter, allResources } = this.props
        const { name, tag, county } = this.state
        return (
            <div className={classes.filterContainer}>
                <div className={classes.formInputContainer}>
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
                            <MenuItem value={'Russell'}>Russell County</MenuItem>
                            <MenuItem value={'Barren'}>Barren County</MenuItem>
                        </Select>
                    </FormControl>
                </div>

                <Button variant='contained' color='primary' onClick={() => applyResourceFilter(allResources, name, tag, county)}>
                    Apply Filter
                </Button>
            </div>
        )
    }
}

const mapStateToProps = ({ resourceTable }) => {
    const { tempResources, allResources } = resourceTable
    return { tempResources, allResources }
}



export default connect(mapStateToProps, { applyResourceFilter })(withStyles(styles)(ResourceFilter))