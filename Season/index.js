import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Spinner from './Spinner';
class App extends React.Component{
    /*
    //automaticaly called 
    constructor(props){
        //for  react.component contructor code
        super(props);

        //initializing state function
        //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state
        this.state = { lat: null, errorMessage: '' };
         
    }
    */
     
    //laternative for state initialization 
    state = { lat:null , errorMessage: ''};

    //data loading
    componentDidMount(){

        //location
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                //to update always call setState
                this.setState({lat: position.coords.latitude})
            },
            (err) => {
                this.setState({errorMessage : err.message})
            }
      
        );

    }


    componentDidUpdate(){
        //console.log('it rerender');
    }

    renderContent(){
        if(this.state.errorMessage && !this.state.lat){
            return <div>Error: {this.state.errorMessage}</div>;
        }else if(!this.state.errorMessage && this.state.lat){
            return  <SeasonDisplay lat={this.state.lat} />;
        }
        return  <Spinner message="Please accept location request" /> ;
    }
     
    render(){
         return (
           <div>
               {this.renderContent()}
           </div>
         );
    } 
}
ReactDOM.render(<App/>,document.querySelector('#root'))