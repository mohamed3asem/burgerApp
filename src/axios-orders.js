import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://react-my-burger-54e13.firebaseio.com/'
});

export default instance;