import React from 'react';
import LanguageContext from '../contexts/LanguageContext';

class Button extends React.Component{
    static contextType = LanguageContext;

    render(){
        const text = this.context == 'english' ? 'Submit' : 'प्रस्तुत';
        return (
             <button className="ui button primary">{text}</button>
        );
    // using consumer data 
    //     return (
    //         <button className="ui button primary"> 
    //         <LanguageContext.Consumer>
    //             {(value) => value ===  'english' ? 'Submit' : 'प्रस्तुत'}
    //         </LanguageContext.Consumer>
    //         </button>
    //   );
    }
}

export default Button;