import { withStyles, Card, CardActionArea, CardContent, Typography, CardActions,Button } from '@material-ui/core'
import React, { Component } from 'react'
import { connect } from 'react-redux'

const styles = theme => ({
    resourceCard: {
        maxWidth: '300px'
    },
    cardName: {
        marginBottom: '0'
    },
    tagName: {
        marginLeft: '10px'
    }
})

class ResourceCard extends Component {
    render() {
        const { name, tag, classes, secondaryColor } = this.props
        return (
            <Card className={classes.resourceCard}>
                <CardActionArea>
                    <CardContent>
                        <Typography className={classes.cardName} gutterBottom variant="h5" component="h2">
                            {name}
                        </Typography>
                        <Typography className={classes.tagName} variant="caption" color="textSecondary" component="p">
                            {tag}
                        </Typography>
                    </CardContent>
                </CardActionArea>
                <CardActions>
                    <Button style={{ color: `#${secondaryColor}` }} size="small" color="primary">
                        View
            </Button>
                </CardActions>
            </Card>
        )
    }
}

const mapStateToProps = ({ countyResources }) => {
    const { design } = countyResources
    const { labelColor, primaryColor, secondaryColor } = design
    return { labelColor, primaryColor, secondaryColor }
}

export default connect(mapStateToProps, null)(withStyles(styles)(ResourceCard))