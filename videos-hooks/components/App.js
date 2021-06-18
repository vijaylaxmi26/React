import React from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


class App extends React.Component{
    //<VideoDetail video={this.state.selectedVideo} />
    state = { videos: [], selectedVideo: null };

    componentDidMount(){
      this.onTermSubmit('flowers');
    }

    onTermSubmit = async (term) =>{
      //console.log(term);
      const response = await youtube.get('/search',{
          params:{
            q:term
          }
      });
       
      //console.log(response);
      this.setState({
        videos: response.data.items,
        selectedVideo: response.data.items[0]
      });
    };

    onVideoSelect = (video) =>{
        this.setState({selectedVideo: video });
        //console.log(video.snippet.title);
    };

    render(){
        return (
            <div className="ui container"> 
              <SearchBar onSubmit={this.onTermSubmit} />
              <div className="ui grid">
                <div className="ui row">
                  <div className="ten wide column">
                     <VideoDetail video={this.state.selectedVideo} />
                  </div>
                  <div className="six wide column">
                     <VideoList onVideoSelect={this.onVideoSelect} videos={this.state.videos} />
                   </div>
                </div>
              </div>
              
            </div>
        );
    }
}

export default App;