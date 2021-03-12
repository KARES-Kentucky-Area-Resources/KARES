import React, { Component } from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { Card, CardActionArea, CardContent, Button, Typography, CardActions } from '@material-ui/core'

import './Resources.css'


class Resources extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loading: true
        }
    }

    render() {

        const county = this.props.county.match.params.county

        return (
            <div>
                <div className='countyHeader'><p>{county[0].toUpperCase() + county.slice(1)} County</p></div>

                <div className='allResourcesContainer'>
                    <Card className='resourceCard'>
                        <CardActionArea>
                            <CardContent>
                                <Typography gutterBottom variant="h5" component="h2">
                                    Lizard
                                </Typography>
                                <Typography variant="body2" color="textSecondary" component="p">
                                    Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
                                    across all continents except Antarctica
                                </Typography>
                            </CardContent>
                        </CardActionArea>
                        <CardActions>
                            <Button size="small" color="primary">
                                View
                            </Button>
                        </CardActions>
                    </Card>
                </div>
            </div>
        )
    }
}

export default Resources