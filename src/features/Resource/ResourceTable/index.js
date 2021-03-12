import { withStyles, TableContainer, TableHead, TableRow, TableCell, Table, TableBody, Paper, Button } from '@material-ui/core'

import React, { Component } from 'react'
import { connect } from 'react-redux'
import { loadAllResources } from './redux/resourceTableActions'

import { openAdminResourceForm } from '../AdminResourceView/redux/adminResourceViewActions'
import AdminResourceView from '../AdminResourceView'

const styles = theme => ({
    table: {
        margin: '0 auto',
        marginTop: '20px',
        maxWidth: '1200px',
    }
})

class ResourceTable extends Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    componentDidMount() {
        this.props.loadAllResources()
    }

    render() {
        const { tempResources, classes, openAdminResourceForm, isOpen} = this.props
        return (
            <div>
                { tempResources.length === 0 ? <p style={{ color: 'white' }}>There are no resources matching this filter.</p> :
                    <TableContainer component={Paper} className={classes.table}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Resource</TableCell>
                                    <TableCell align="right">County</TableCell>
                                    <TableCell align="right">Phone</TableCell>
                                    <TableCell align="right">Tag</TableCell>
                                    <TableCell align="right"></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tempResources.map((vis) => (
                                    <TableRow key={vis.name}>
                                        <TableCell component="th" scope="row">
                                            <b>{vis.name}</b>
                                        </TableCell>
                                        <TableCell align="right" >
                                            {vis.county[0].toUpperCase() + vis.county.slice(1)}
                                        </TableCell>
                                        <TableCell align="right">{vis.phone}</TableCell>
                                        <TableCell align="right">{vis.tag}</TableCell>
                                        <TableCell align='right'>
                                            <Button variant='contained' color='primary' onClick={() => openAdminResourceForm(vis)}>
                                                View
                                            </Button>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
                { isOpen ? <AdminResourceView /> : null}
            </div>
        )
    }
}

const mapStateToProps = ({ resourceTable, adminResourceView }) => {
    const { tempResources } = resourceTable
    const { isOpen } = adminResourceView
    return { tempResources, isOpen }
}

export default connect(mapStateToProps, { loadAllResources, openAdminResourceForm })(withStyles(styles)(ResourceTable))