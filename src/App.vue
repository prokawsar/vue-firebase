<template>
  <div id="app">
    <img class="img-responsive center-block" src="./assets/logo.png">
    <!-- <router-view/> -->
    <h4 class="text-center">Yes I'm Learning Vue and Realtime DB Firebase with webpack</h4>
    <br />

    <div class="container">
        <div class="row">
            <div class="col-md-6 col-md-offset-3 text-center">
                <input type="text" v-model="first">
                <button type="submit" class="btn btn-primary" @click="submit">Add Me</button>
                <p></p>

                <ul class="list-group">
                    <li v-for="name of names" v-bind:key="name['.key']" class="list-group-item">
                        <div v-if="!name.edit">
                            <p>{{name.name}}</p>
                            <button type="submit" class="btn btn-danger" @click="removeName(name['.key'])">Remove</button>
                            <button type="submit" class="btn btn-info" @click="editName(name['.key'])">Edit</button>
                        </div>
                        <div v-else>

                            <input type="text" v-model="name.name">
                            <button type="submit" class="btn btn-success" @click="saveName(name)">Save</button>
                            <button type="submit" class="btn btn-warning" @click="cancelEdit(name['.key'])">Cancel</button>
                        </div>
                    </li>
                </ul>
            </div>
        </div>
    </div>
    
    <div id="footer">
      <div class="container text-center">
        Learner <a class="user" href="https://github.com/prokawsar" target="_blank">ProKawsar</a>
      </div>
    </div>
</div> <!--app div -->

</template>

<script>
import { nameRef } from './firebase'

export default {
  name: 'app',
  data(){
    return {
      first: ''
    }
  
  },
  firebase:{
    names: nameRef
  },

  methods: {
    submit(){
      nameRef.push({name: this.first, edit:false})
      this.first = ''
    },
    removeName(key){
      nameRef.child(key).remove();
    },

    editName(key){
      nameRef.child(key).update({edit: true});
    },
    cancelEdit(key){
      nameRef.child(key).update({edit: false});
    },
    saveName(person){
      let key = person['.key'];
      nameRef.child(key).set({name: person.name, edit: false});
    }
  }
}
</script>