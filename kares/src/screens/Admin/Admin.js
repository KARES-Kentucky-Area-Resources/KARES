import React, { Component } from 'react'
import { connect } from 'react-redux'
import AdminConsole from '../../features/AdminConsole'
import Authorization from '../../features/Authorization'

class Admin extends Component {
    
    render() {
        const { user, loggedIn } = this.props
        return (
            <div>
                {console.log(user)}
                {loggedIn ? <AdminConsole /> : <Authorization />}
            </div>
        )
    }
}

const mapStateToProps = ({ authorization }) => {
    const { loggedIn, user } = authorization
    return { user, loggedIn }
}


export default connect(mapStateToProps, null)(Admin)