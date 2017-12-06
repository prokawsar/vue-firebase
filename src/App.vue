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
          <li><router-link to="/firebase">Firebase</router-link></li>
          <li><router-link to="/chat">Chat</router-link></li>
          <li><router-link to="/about">About</router-link></li>
        
        </ul>
      
        <ul class="nav navbar-nav navbar-right">
          <li><router-link to="/login">Login</router-link></li>
          <li><router-link to="/register">Register</router-link></li>
          <li><router-link to="/projects">Projects</router-link></li>
        
        </ul>
      </div>
    </div>
  </nav>

    <router-view></router-view>

    <div id="footer">
      <div class="container text-center">
        Learner <a class="user" href="https://github.com/prokawsar" target="_blank">ProKawsar</a>
      </div>
    </div>
  </div> <!--app div -->
</template>
