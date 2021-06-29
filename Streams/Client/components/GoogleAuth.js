import React from 'react';

class GoogleAuth extends React.Component{

    componentDidMount(){
        window.gapi.load('client:auth2', () => {
            window.gapi.client.init({
               clientId: '185532324616-9md2o3f37mma3879slqg8tjttiasio1o.apps.googleusercontent.com',
               scope: 'email'
            });
        });
         
    }
    render(){
        return (
            <div>GoogleAuth</div>
        );
    }
}

export default GoogleAuth;