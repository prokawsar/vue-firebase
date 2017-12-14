<template>
   <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                <div class="panel-heading">Login</div>

                <div class="panel-body form-horizontal">
                    <!-- <form class="form-horizontal" action=""> -->
                     
                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" v-model="email" type="email" class="form-control" name="email" value="" required autofocus>

                            </div>
                        </div>

                        <div class="form-group">
                            <label for="password" class="col-md-4 control-label">Password</label>

                            <div class="col-md-6">
                                <input id="password" v-model="password" type="password" class="form-control" name="password" required>

                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-6 col-md-offset-4">
                                <div class="checkbox">
                                    <label>
                                        <input type="checkbox" name="remember"> Remember Me
                                    </label>
                                </div>
                            </div>
                        </div>

                        <div class="form-group">
                            <div class="col-md-4">
                                 <router-link to="register" class="btn btn-link">I don't have account</router-link>

                            </div>

                            <div class="col-md-8">

                                <a class="btn btn-link" href="#">
                                    Forgot Your Password?
                                </a>
                                <button v-on:click="login" type="submit" class="btn btn-primary">
                                    Login
                                </button>
                            </div>
                        </div>
                    <!-- </form> -->
                </div>
            </div>
            </div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'  
import Router from '../../router';

export default {
    name: 'login',
    data: function(){
        return {
            email: '',
            password: ''
        }
    },
    methods:{
        login: function(){
            firebase.auth().signInWithEmailAndPassword (this.email, this.password).then(
                (user) => {
                    alert('Well ! You are Logged In')
                    Router.push('/')
                    location.reload();
                },
                (err) => {
                    alert('Opps. ' + err.message)
                }
            )
        }
    }
}
</script>

