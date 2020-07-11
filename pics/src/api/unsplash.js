import axios from 'axios';


export default axios.create({
baseURL:'https://api.unsplash.com',
headers:{
    Authorization: 'Client-ID upTv1qE4pDJmr90NiWgnS0IWcNjSmFsLSGI6Fl8cTK4'
}
});