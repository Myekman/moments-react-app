import axios from "axios";

// the unique URL for your deployed API project on heroku
axios.defaults.baseURL = "https://moments-react-app3-78a242b755e5.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true