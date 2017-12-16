<template>
<!-- this is main app page -->

  <div id="app">

  <nav class="navbar navbar-inverse">
    <div class="container-fluid">
      <div class="navbar-header">
        <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-2">
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">ProKawsar</router-link>
      </div>

      <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-2">
        <ul class="nav navbar-nav">
          <li v-if="isAuth"><router-link to="/firebase">Firebase</router-link></li>
          <li v-if="isAuth"><router-link to="/chat">Chat</router-link></li>
          <li><router-link to="/users">All Users</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        
        </ul>
      
        <ul class="nav navbar-nav navbar-right">
          <li v-if="!isAuth"><router-link to="/login">Login</router-link></li>
          <li v-if="!isAuth"><router-link to="/register">Register</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
          <li v-if="isAuth"><a style="cursor: pointer" v-on:click="logOut" title="">Log out</a></li>
          
        </ul>
      </div>
    </div>
  </nav>

    <router-view></router-view>

    <div id="footer">
      <div class="container text-center">
        Learner <a class="user" href="https://github.com/prokawsar" target="_blank">ProKawsar</a> ♥ {{ userName }}
      </div>
    </div>
  </div> <!--app div -->
</template>

<script>
import firebase from 'firebase'
import { userRef } from './firebase'
import Router from './router'

export default {
  name: 'app',
  data: function(){
    return{
      email: '',
      name: ''
    }
  },
  mounted(){
    if(firebase.auth().currentUser){
      this.email = firebase.auth().currentUser.email
    }
  },
  firebase:{
    users: userRef
  },
  methods:{
    logOut: function(){
        firebase.auth().signOut().then(function(){
            // console.log('Signed Out');
            alert('Ohh ! You Signed out')
            Router.push('login')
            location.reload();
          }, 
          function(error) {
            alert('Opps ! ' + error)
        });
    }
  },
  
  computed:{
    isAuth: function(){
      if(firebase.auth().currentUser) return true
      else false
    },
    userName: function(){
        var email = this.email
        var ref = userRef.orderByChild('email').equalTo(email)
        var name
        ref.on('value', snapshot => {
           if (snapshot.exists()) {
              name = snapshot.val()
              name = Object.values(name)
              name = name[0].name
              console.log('User email : ' + email + ' User name: ' + name)
              // return name
             
           } else {
            console.log('There is no user who has email like '+ email)
            name = 'You'
           }
        })
        return name
    
    }
    
  } 
}
</script>

