import React,{useState, useEffect} from 'react';
import SearchBar from './SearchBar';
import youtube from '../apis/youtube';
import VideoList from './VideoList';
import VideoDetail from './VideoDetail';


const App = () => {

  const [videos,setVideos] = useState([]);
  const [selectedVideo, setSelectedVideo] = useState(null);

  useEffect(() => {
    onTermSubmit('flowers');
  },[]);

  //<VideoDetail video={this.state.selectedVideo} />
     
  const onTermSubmit = async (term) =>{
    //console.log(term);
    const response = await youtube.get('/search',{
        params:{
          q:term
        }
     });
     
     
    setVideos(response.data.items);
    setSelectedVideo(response.data.items[0]);

  };

    const onVideoSelect = (video) =>{
       setSelectedVideo(video);
       //console.log(video.snippet.title);
   };

   return (
    <div className="ui container"> 
      <SearchBar onSubmit={onTermSubmit} />
      <div className="ui grid">
        <div className="ui row">
          <div className="ten wide column">
             <VideoDetail video={selectedVideo} />
          </div>
          <div className="six wide column">
             <VideoList onVideoSelect={onVideoSelect} videos={videos} />
           </div>
        </div>
      </div>
      
    </div>
    ); 

};
 
export default App;