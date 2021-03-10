import { TextField, Typography, withStyles } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Button, FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import { loadAllVisitors } from '../VisitorsTable/redux/visitorsTableActions'


const styles = theme => ({
    visitorsFilter: {
        backgroundColor: 'white',
        borderRadius: '5px',
        padding: '8px',
        textAlign: 'center'
    },
    formControl: {
        width: '100%',
        borderColor: 'white',
        textAlign: 'left',
        marginBottom: '10px'
    }
})

class VisitorsFilter extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: '',
            county: 'All'
        }
    }

    handleChange = (text, key) => {
        this.setState({ [key]: text.target.value })
    }

    render() {
        const { name, county } = this.state
        const { loadAllVisitors, classes } = this.props
        return (

            <div className={classes.visitorsFilter}>
                <Typography variant='subtitle1' style={{ textAlign: 'center' }}>
                    Filter
                </Typography>
                <hr />
                <TextField
                        label="Name"
                        variant="outlined"
                        color='primary'
                        className={classes.formControl}
                        onChange={(text) => this.handleChange(text, 'name')} />
                <FormControl variant='outlined' className={classes.formControl}>
                    <InputLabel>County</InputLabel>
                    <Select
                        value={county}
                        onChange={(val) => this.handleChange(val, 'county')}
                        label="County"
                    >
                        <MenuItem value='All'>
                            <em>All</em>
                        </MenuItem>
                        <MenuItem value={'Allen'}>Allen County</MenuItem>
                        <MenuItem value={'Russell'}>Russell County</MenuItem>
                        <MenuItem value={'Barren'}>Barren County</MenuItem>
                        <MenuItem value={'Metcalfe'}>Metcalfe County</MenuItem>
                        <MenuItem value={'Edmonson'}>Edmonson County</MenuItem>
                        <MenuItem value={'Green'}>Green County</MenuItem>
                        <MenuItem value={'Warren'}>Warren County</MenuItem>
                    </Select>
                </FormControl>


                <Button
                    variant='contained'
                    color='primary'
                    style={{ marginTop: '10px' }}
                    onClick={() => loadAllVisitors(name, county)}>
                    Reload Visitors
                </Button>
            </div>
        )
    }
}

const mapStateToProps = ({ resourceForm }) => {
    const { isResourceFormOpen } = resourceForm
    return { isResourceFormOpen }
}



export default connect(mapStateToProps, { loadAllVisitors })(withStyles(styles)(VisitorsFilter))