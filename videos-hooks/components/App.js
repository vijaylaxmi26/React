import React,{useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';
import useVideo from '../hooks/useVideos';

const App = () => {

   
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [videos,search] = useVideo('React');
  
  useEffect(() => {
    setSelectedVideo(videos[0]);
  },[videos]);
   

  //<VideoDetail video={this.state.selectedVideo} />
   

   return (
    <div className="ui container"> 
      <SearchBar onSubmit={search} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
             <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
             <VideoList 
             //(video) => setSelectedVideo(video) = setSelectedVideo
             onVideoSelect={setSelectedVideo} 
             videos={videos} 
             />
           </div>
        </div>
      </div>
      
    </div>
    ); 

};
 
export default App;