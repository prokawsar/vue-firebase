<template>
    <div class="container">
        <div class="row">
            <div class="col-md-3"></div>

            <ul class="list-group col-md-6">
                <li class="list-group-item active text-center">Chat/Comment/Notification </li>
                <li class="list-group-item" v-for="value in chat.message" :key=value.index>
                    {{ value }}
                </li>

                <input type="text" class="form-control" name="" placeholder="Type your message..." 
                v-model='message' 
                @keyup.enter='send'
                >

            </ul>

            <div class="col-md-3"></div>
        </div>
    </div>
</template>

<script>
import firebase from 'firebase'
import Router from '../router';

export default {
    
    data(){
        return{
            message: '',
            chat:{
                message: []
            }
        }
    },
    methods: {
        send: function(){
            if(this.message === "clear"){ //clearing messages just for comfort
                this.chat.message = []
                this.message = ''
                return
            }

            if(this.message != 0){
                this.chat.message.push(this.message);
                this.message = ''
            }
            
        },
        sign_out: function(){
            firebase.auth().signOut().then(function(){
                    // console.log('Signed Out');
                    alert('Signed out')
                    Router.push('login')
                    location.reload();
                }, 
                function(error) {
                    alert('Opps ! ' + error)
            });
        } 
    }
}
</script>
