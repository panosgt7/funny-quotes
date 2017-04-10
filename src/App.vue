
<template>
  <div id="app">

    <nav id="mainNav" class="navbar navbar-default navbar-fixed-top navbar-custom">
    <div class="container">
        <!-- Brand and toggle get grouped for better mobile display -->
        <div class="navbar-header page-scroll">
          <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span> Menu <i class="fa fa-bars"></i>
          </button>
          <a class="navbar-brand" href="#">"CHUCK NORRIS"</a>
        </div>

        <!-- Collect the nav links, forms, and other content for toggling -->
        <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul class="nav navbar-nav navbar-right">
            <li class="page-scroll">
              <router-link to="/home">Home</router-link>
            </li>
            <li class="page-scroll">
              <router-link to="/login" v-show="!user.authenticated">Login</router-link>
            </li>
            <li class="page-scroll">
              <router-link to="/signup" v-show="!user.authenticated">Sign Up</router-link>
            </li>
            <li class="page-scroll">
              <router-link to="/secretquote" v-show="user.authenticated">Secret Quote</router-link>
            </li>
            <li class="page-scroll">
              <a href="#" v-show="user.authenticated" @click="logout()" >Logout</a>
            </li>
          </ul>
        </div>

      </div>

    </nav>

    <div class="container">
      <router-view></router-view>
    </div>

  </div>

</template>

<script>
  import('./assets/js/bootstrap.min.js')
  import('./assets/js/jquery.min.js')
  import auth from './auth'
  export default {
    data() {
      return {
        user: auth.user
      }
    },
    methods: {
      logout() {
        auth.logout()
      }
    }
  }
</script>

<style>
  @import "./assets/css/bootstrap.min.css";
  @import "./assets/css/style.css";
  @import "./assets/css/font-awesome.min.css";
  @import "https://fonts.googleapis.com/css?family=Montserrat:400,700";
  @import "https://fonts.googleapis.com/css?family=Lato:400,700,400italic,700italic";
</style>
