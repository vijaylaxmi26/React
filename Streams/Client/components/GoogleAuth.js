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
                this.setState({isSignedIn: this.auth.isSignedIn.get()})
            });
        });
         
    }

    //console cammand for sign in or out
    //gapi.auth2.getAuthInstance().signIn()
    //gapi.auth2.getAuthInstance().signOut()

    //helper method
    renderAuthButton(){
        if(this.state.isSignedIn === null){
            return <div> i don't know</div>;
        }else if(this.state.isSignedIn){
            return <div>i am signed in</div>;
        }

        return <div>Im not signed in</div>;
    }
    render(){
        return (
            <div>{this.renderAuthButton()}</div>
        );
    }
}

export default GoogleAuth;