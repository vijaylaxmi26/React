import React from 'react';

class GoogleAuth extends React.Component{

    state= {isSignedIn: null};

    componentDidMount(){

        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
               clientId: '185532324616-9md2o3f37mma3879slqg8tjttiasio1o.apps.googleusercontent.com',
               scope: 'email'
            }).then(() => {
                //get user logged in or not 
                this.auth = window.gapi.auth2.getAuthInstance();
                //this.setState({isSignedIn: this.auth.isSignedIn.get()});
                this.onAuthChange();
                this.auth.isSignedIn.listen(this.onAuthChange);
            });
        });
         
    }

    //helper methods
    onAuthChange = () => {
         this.setState({isSignedIn: this.auth.isSignedIn.get()});
    };

    onSignIn = () => {
        this.auth.signIn();
    };

    onSignOut = () => {
        this.auth.signOut();
    };


    //console cammand for sign in or out
    //gapi.auth2.getAuthInstance().signIn()
    //gapi.auth2.getAuthInstance().signOut()

    //helper method
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return null;
        }else if(this.state.isSignedIn){
            return (
              <button onClick={this.onSignOut} className="ui red google button">
              <i className="google icon"/>
                Log out
              </button>
            );
        }

        return (
            <button onClick={this.onSignIn} className="ui green google button">
            <i className="google icon"/>
              Log in
            </button>
          );
    }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;