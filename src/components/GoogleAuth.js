import React from "react";
import { connect } from 'react-redux'
import {signOut, signIn} from "../actions";

class GoogleAuth extends React.Component {

    componentDidMount() {
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
                clientId: '563252612176-u3fa1q4p7qcillcttgp38db1467usaiu.apps.googleusercontent.com',
                scope: 'email'
            }).then (() => {
                this.auth = window.gapi.auth2.getAuthInstance();
                this.onAuthChange(this.auth.isSignedIn.get())
                this.auth.isSignedIn.listen(this.onAuthChange)
            })
        })
    }

    onAuthChange = (isSignedIn) => {
    if (isSignedIn) {
        this.props.signIn(this.auth.currentUser.get().getId());
    } else {
        this.props.signOut()
    }
    }

    onSignInClick = () => {
        this.auth.signIn();
    }
    onSignOutClick = () => {
        this.auth.signOut();
    }

    renderAuthButton() {

        if(this.props.isSignedIn === null) {
            {console.log("dano da e tyka")}
            return <div className='ui white button'>Loading..</div>;
        } else if (this.props.isSignedIn) {

            return (
                <button className="ui red google button" onClick={this.onSignOutClick} >
                    <i className="google icon"/>
                    Sign Out
                </button>
            )
        } else {

            return (
                <button className="ui red google button" onClick={this.onSignInClick}>
                    <i className="google icon"/>
                    Sign in with Google
                </button>
            )
        }
    }


    render() {
        console.log("Test v googleAuth")

        return (
            <div>
                {this.renderAuthButton()}
            </div>
        );
    }
}

const mapStateToProps = state => {
    console.log("Test v mapstate")

    return { isSignedIn: state.auth.isSignedIn }
}

export default connect(mapStateToProps, {signIn, signOut})(GoogleAuth);