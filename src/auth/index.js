import {router} from '../main'
import Vue from 'vue'

// URL and endpoint constants
const API_URL = 'http://localhost:3001/'
const LOGIN_URL = API_URL + 'sessions/create/'
const SIGNUP_URL = API_URL + 'users/'

export default {

  // User object will let us check authentication status
  user: {
    authenticated: false
  },

  // Send a request to the login URL and save the returned JWT
  login(context, creds, redirect) {
    context.$http.post(LOGIN_URL, creds).then(response => {
      window.localStorage.setItem('id_token', response.data.id_token)

      this.user.authenticated = true
      Vue.http.headers.common['Authorization'] = this.getAuthHeader()

      // Redirect to a specified route
      if(redirect) {
        router.push('/home')
      }

    }, response => {
      context.error = response.data
    });
  },

  signup(context, creds, redirect) {
    context.$http.post(SIGNUP_URL, creds).then(response => {
      window.localStorage.setItem('id_token', response.data.id_token)

      this.user.authenticated = true

      if(redirect) {
        router.push('/home')
      }

    }, response => {
      context.error = response.data
    });

  },

  // To log out, we just need to remove the token
  logout() {
    window.localStorage.removeItem('id_token')
    this.user.authenticated = false
    delete Vue.http.headers.common['Authorization']
    router.push('/home')
  },

  checkAuth() {
    var jwt = window.localStorage.getItem('id_token')
    if(jwt) {
      this.user.authenticated = true
    }
    else {
      this.user.authenticated = false
    }
  },

  // The object to be passed as a header for authenticated requests
  getAuthHeader() {
    return 'Bearer ' + window.localStorage.getItem('id_token')
  }
}
