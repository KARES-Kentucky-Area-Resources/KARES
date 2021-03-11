import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withStyles, Card, Typography, CardContent, CardActions, Button } from '@material-ui/core'
import { Link } from 'react-router-dom'

const styles = theme => ({
    AdminOptionsMain: {
        display: 'flex',
        justifyContent: 'space-evenly',
        flexWrap: 'wrap'
    },
    card: {
        maxWidth: '360px',
        minWidth: '275px',
        width: '80vw',
        marginTop: '30px',
    },
    cardButton: {
        marginLeft: 'auto',
        '& a': {
            textDecoration: 'none',
            color: 'black',

            '&:hover': {
                textDecoration: 'none',
            }
        }
    }
})

class AdminOptions extends Component {

    render() {
        const { classes } = this.props
        return (
            <div className={classes.AdminOptionsMain}>
                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Manage Visitors
                            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            View a table of visitors across all counties. This feature allows you
                            to view any user that has visited the site and filter them by their name
                            or county.
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" color="primary" className={classes.cardButton} style={{ marginLeft: 'auto' }}>
                            <Link to='/admin/visitor'>
                                GO
                            </Link>
                        </Button>
                    </CardActions>
                </Card>

                <Card className={classes.card}>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h2">
                            Manage Resources
                            </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">
                            View all resources that have been submitted to the KARES database.
                            All resources are displayed on a table. You can view, edit, and
                            delete resources with this feature
                        </Typography>
                    </CardContent>
                    <CardActions>
                        <Button size="medium" color="primary" className={classes.cardButton} style={{ marginLeft: 'auto' }}>
                            <Link to='/admin/rescoures'>
                                GO
                            </Link>
                        </Button>
                    </CardActions>
                </Card>
            </div>
        )
    }
}

export default connect(null, null)(withStyles(styles)(AdminOptions))