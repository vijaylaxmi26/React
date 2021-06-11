import React from 'react';
import unsplash from '../api/unsplash'
import SearchBar from './SearchBar';
import ImageList from './ImageList';

class App extends React.Component {
     
    state = {images: [] }

      onSearchSubmit = async (term) => {
        const response = await unsplash.get('/search/photos',{
            params :{ query: term } 

        });

        //console.log(response.data.results);
        
        this.setState({ images: response.data.results })
        /* //alternative
        .then( (response) => {
             console.log(response.data.results);
        });
        */

        //function in then is throwback whenever we get the data from api

      //console.log(term);
    }

    /*<SearchBar onSubmit={this.onSearchSubmit} />
    here onSubmit a props so name can be anything
     */

    render(){
      return (
          <div className="ui container" style={{ marginTop:'10px' }}>
             <SearchBar onSubmit={this.onSearchSubmit} />
             Found: {this.state.images.length} images
             <ImageList images={this.state.images}/>
          </div>
       );
    }
};

export default App;