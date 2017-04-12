<template>
    <div class="col-sm-6 col-sm-offset-3">
      <img class="img-responsive" src="../assets/img/profile1.png" alt="">
      <h1>Get a Free Chuck Norris Quote!</h1>
      <button class="btn btn-primary" v-on:click="getQuote()">Get a Quote</button>
      <div class="quote-area" v-if="quote">
        <h2><blockquote>{{ quote }}</blockquote></h2>
      </div>
    </div>
  </template>

  <script>
  export default {
    data() {
      return {
        quote: ''
      }
    },
    methods: {
      getQuote() {
        this.$http.get('http://localhost:3001/api/random-quote').then(response => {
          this.quote = response.data;
        }, response => {
          console.log(err)
        });
      }
    }
  }
  </script>

  <style>
  .quote-area h2 {
    color: black;
  }
  </style>
