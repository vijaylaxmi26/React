import './Videoitem.css';
import React from 'react';


const VideoItem = ({video , onVideoSelect}) =>{
    //<div class="description">{video.snippet.description}</div>
   return (
       <div onClick={() => onVideoSelect(video)} className="video-item item">
          <img className="ui image" src={video.snippet.thumbnails.medium.url} alt="not available"/>
          <div className="content">
            <div className="header" >{video.snippet.title}</div>
             
          </div>
       </div>
    );
};

export default VideoItem;