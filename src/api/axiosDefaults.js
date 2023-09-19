import axios from "axios";

// the unique URL for your deployed API project on heroku
axios.defaults.baseURL = "https://django-rest-framework3-cd622c575206.herokuapp.com/"
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true