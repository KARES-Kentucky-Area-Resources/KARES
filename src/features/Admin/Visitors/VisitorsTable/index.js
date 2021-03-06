import React, { Component } from 'react'
import { connect } from 'react-redux'
import './VisitorsTable.css'

import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@material-ui/core'





class VisitorsTable extends Component {
    render() {
        const { tempVisitors } = this.props
        return (
            <div className='visitorsContainer'>
                { tempVisitors.length === 0 ? <p style={{color: 'white'}}>There are no visitors matching this filter.</p> :
                    <TableContainer component={Paper}>
                        <Table aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell>Name</TableCell>
                                    <TableCell align="right">Email</TableCell>
                                    <TableCell align="right">Phone</TableCell>
                                    <TableCell align="right">County</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {tempVisitors.map((vis) => (
                                    <TableRow key={vis.name}>
                                        <TableCell component="th" scope="row">
                                            {vis.name}
                                        </TableCell>
                                        <TableCell align="right">{vis.email}</TableCell>
                                        <TableCell align="right">{vis.phone}</TableCell>
                                        <TableCell align="right">{vis.county[0].toUpperCase() + vis.county.slice(1)}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                }
            </div>
        )
    }
}

const mapStateToProps = ({ visitorsTable }) => {
    const { allVisitors, temp } = visitorsTable
    const { tempVisitors } = temp
    return { allVisitors, tempVisitors }
}

export default connect(mapStateToProps, null)(VisitorsTable)