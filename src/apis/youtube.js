import axios from 'axios';

const KEY = 'AIzaSyB0U2vAe0N4SM8o_hEZ8r4wIyuH1uM2oT8';

export default axios.create({
  baseURL: 'https://www.googleapis.com/youtube/v3',
  params: {
    part: 'snippet',
    type: 'video',
    maxResults: 20,
    key: KEY
  }
});
