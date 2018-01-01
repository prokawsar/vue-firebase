<template>
   <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3">
                <div class="panel panel-default">
                <div class="panel-heading">Register</div>

                <div class="panel-body form-horizontal">
                    <!-- <form class="form-horizontal" method="POST" action=""> -->
                        
                        <div class="form-group">
                            <label for="name" class="col-md-4 control-label">Name</label>

                            <div class="col-md-6">
                                <input v-model="name" id="name" type="text" class="form-control" name="name" value="" required autofocus>

                            </div>
                        </div>

                        <div class="form-group">
                            <label for="email" class="col-md-4 control-label">E-Mail Address</label>

                            <div class="col-md-6">
                                <input id="email" v-model="email" type="email" class="form-control" name="email" value="" required>

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
                                <router-link to="login" class="btn btn-link">I have account</router-link>

                                <button v-on:click="register" type="submit" class="btn btn-primary pull-right">
                                    Register
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
import { userRef } from '../../firebase'
import Router from '../../router'

export default {
    name: 'register',
    data: function(){
        return {
            name: '',
            email: '',
            password: ''
        }
    },
    methods:{
        register: function(){
            
            firebase.auth().createUserWithEmailAndPassword(this.email, this.password).then(
                function(user){                   
                    alert('Your account has been created and logged in')        
                    // userRef.push({ email: user.email, userID: user.uid })
                    Router.push('/')
                    location.reload()
                },
                function(err){
                    alert('Opps. ' + err.message)
                }
            ),
            userRef.push({name: this.name, email: this.email })
            
        }

    }

}
</script>
