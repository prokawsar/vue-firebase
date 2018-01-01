<template>

    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
                
                <ul class="list-group">
                    <li v-for="name of users" v-bind:key="name['.key']" class="list-group-item">
                        <div v-if="!name.edit">
                            <p>{{name.name}} || {{name.email}}</p>
                            
                            <button v-if="email && email==name.email" type="submit" class="btn btn-info" @click="editName(name['.key'])">Edit</button>
                        </div>
             
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
import { userRef } from '../firebase'
import firebase from 'firebase'

export default {
  name: 'app',
  data: function(){
    return{
      email: firebase.auth().currentUser.email
    }
  },
  firebase:{
    users: userRef
  }
}
</script>