import React, { Component } from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Card, CardActionArea, CardContent, Button, Typography, CardActions, AppBar, Toolbar, withStyles } from '@material-ui/core'
import { getAllResouces } from '../../features/CountyResources/redux/countyResourcesActions'
import { connect } from 'react-redux'


const styles = theme => ({
    resourcesContainer: {
        marginTop: '75px',
        padding: '16px'
    },
    resourceCard: {
        maxWidth: '300px'
    }
})

class CountyResources extends Component {

    componentDidMount() {
        this.props.getAllResouces(this.props.county.match.params.county.toLowerCase())
    }

    renderResources(resources) {
        if (resources.length < 1) {
            return (<p>Couldn't find any resources for this county.</p>)
        } else {
            return resources.map((resource) => (
                <Card key={resource.name} className={this.props.classes.resourceCard}>
                    <CardActionArea>
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                {resource.name}
                        </Typography>
                            <Typography variant="body2" color="textSecondary" component="p">
                                Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                across all continents except Antarctica
                        </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <Button style={{color: `#${this.props.design.secondaryColor}`}} size="small" color="primary">
                            View
                    </Button>
                    </CardActions>
                </Card>
            ))
        }
    }

    render() {
        const { classes, currentCounty, design, allResources } = this.props

        return (
            <div>
                <AppBar style={{backgroundColor: `#${design.primaryColor}`}}>
                    <Toolbar>
                        <p style={{color: `#${design.labelColor}`}}>{currentCounty}</p>
                    </Toolbar>
                </AppBar>

                <div className={classes.resourcesContainer}>
                    {this.renderResources(allResources)}
                </div>
            </div>
        )
    }
}


const mapStateToProps = ({ countyResources }) => {
    const { currentCounty, design, allResources } = countyResources
    return { currentCounty, design, allResources }
}


export default connect(mapStateToProps, { getAllResouces })(withStyles(styles)(CountyResources))