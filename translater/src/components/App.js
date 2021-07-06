import React from 'react';
import UserCreate from './UserCreate';
import LanguageContext from '../contexts/LanguageContext';
class App extends React.Component {

    state = {language: 'english'};
   
    onLanguageChange = (language) =>{
         this.setState({language});
    }


   render(){
        return (
            <div className="ui container">
                <div>
                    Selete a language:
                    <i className="flag us" onClick={() => this.onLanguageChange('english') }/>
                    <i className="flag in" onClick={() => this.onLanguageChange('hindi') }/>

                </div>
                <LanguageContext.Provider value={this.state.language}>
                   <UserCreate/>
                </LanguageContext.Provider>
                 

                
            </div>

        );
    };
};

export default App;