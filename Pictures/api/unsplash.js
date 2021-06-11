import axios from 'axios';

export default axios.create({
    baseURL:'https://api.unsplash.com',
    headers:{
        Authorization: 
        'Client-ID 7XzbD7yYbhJEMzarNaXXX3rQSvCN3zpStvxqge0OtLo'  
    }
});