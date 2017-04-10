<template>
   <div class="col-sm-6 col-sm-offset-3">
     <img class="img-responsive" src="../assets/img/profile2.png" alt="">
     <h1>Get a Secret Chuck Norris Quote!</h1>
     <button class="btn btn-warning" v-on:click="getQuote()">Get a Quote</button>
     <div class="quote-area" v-if="quote">
       <h2><blockquote>{{ quote }}</blockquote></h2>
     </div>
   </div>
 </template>

 <script>
 import auth from '../auth'
 export default {
   data() {
     return {
       quote: ''
     }
   },
   methods: {
     getQuote() {
       this.$http.get('').then(response => {
           this.quote = response.data;
           headers: auth.getAuthHeader()
       }, response => {
        console.log(err)
      });
     }
   }
 }
 </script>
