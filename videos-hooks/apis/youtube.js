import axios from 'axios';

const KEY='AIzaSyBQyaDR8Slrac2FJyGSIfocO0Rwla4aQ9I';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params:{
        part: 'snippet',
        type: 'video',
        maxResult: 5,
        key: KEY 
    }
})

 