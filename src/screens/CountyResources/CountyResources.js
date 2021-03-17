import React, { Component } from 'react'
// import { GoogleMap, LoadScript } from '@react-google-maps/api';
import { AppBar, Toolbar, withStyles, CircularProgress } from '@material-ui/core'
import { getAllResouces } from '../../features/CountyResources/redux/countyResourcesActions'
import { connect } from 'react-redux'
import ResourceCard from '../../features/CountyResources/ResourceCard'
import Loading from '../LoadingScreen/LoadingScreen'


const styles = theme => ({
    resourcesContainer: {
        marginTop: '75px',
        padding: '16px'
    },
    errorContainer: {
        height: '100vh',
        width: '100vw',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'column',
        color: 'white'
    }
})

class CountyResources extends Component {

    componentDidMount() {
        const county = this.props.county.match.params.county
        
        if (county === undefined) {
            this.props.getAllResouces()
        } else {
            this.props.getAllResouces(county.toLowerCase())
        }
    }

    renderResources(resources) {
        if (resources.length < 1) {
            return (<p>Couldn't find any resources for this county.</p>)
        } else {
            return resources.map((resource) => (
                <ResourceCard 
                    key={resource.name}
                    name={resource.name}
                    tag={resource.tag}
                />
            ))
        }
    }

    renderError() {
        let error = this.props.error

        if (error !== 'County does not exist in the KARES directory.') {
            error = <h3>An error has occurred.</h3>
        }

        return (
            <div className={this.props.classes.errorContainer}>
                <h1>{error}</h1>
                <h2>Return to homepage.</h2>
            </div>
        )
    }

    renderPage() {
        const { labelColor, primaryColor } = this.props.design
        return (
            <div>
                <AppBar style={{ backgroundColor: `#${primaryColor}` }}>
                    <Toolbar>
                        <p style={{ color: labelColor }}>{this.props.currentCounty}</p>
                    </Toolbar>
                </AppBar>

                <div className={this.props.classes.resourcesContainer}>
                    {this.renderResources(this.props.allResources)}
                </div>
            </div>
        )
    }


    render() {
        const { loading, error, isLoaded } = this.props
        return (
            <div>
                { loading ? <Loading /> : null }
                { error ? this.renderError() : null }
                { isLoaded ? this.renderPage() : null }
            </div>
        )
    }
}


const mapStateToProps = ({ countyResources }) => {
    const { currentCounty, design, allResources, meta } = countyResources
    const { loading, error, isLoaded } = meta
    return { currentCounty, design, allResources, loading, error, isLoaded }
}


export default connect(mapStateToProps, { getAllResouces })(withStyles(styles)(CountyResources))