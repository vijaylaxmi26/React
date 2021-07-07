import React from 'react';
import UserCreate from './UserCreate';
import {LanguageStore} from '../contexts/LanguageContext';
import LanguageSelector from './LanguageSelector';

class App extends React.Component {
 

   render(){
        return (
            <div className="ui container">
            <LanguageStore>
                <LanguageSelector />
                <UserCreate/>  
            </LanguageStore>
                          
            </div>

        );
    };
};

export default App;