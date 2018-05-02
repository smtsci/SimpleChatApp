<template>
  <div class="content-messages">
    <form @submit.prevent="addMessage">
      <input class="input chat-input" type="text" placeholder="Text Message" v-model="messages">
      <p class="feedback-color" v-if="feedback">{{feedback}}</p>
    </form>
  </div>
</template>

<script>
    import database from '@/firebase/init'

    export default {
        name: "Messages",
        props: ['name'],
        data(){
          return{
            messages: null,
            feedback: null
          }
        },
        methods: {
          addMessage(){
            if(this.messages){
              database.collection('messages').add({
                messages : this.messages,
                name : this.name,
                time : Date.now()
              }).catch(err => {
                console.log(err);
              });
              this.messages = null;
              this.feedback = null;
            } else{
              this.feedback = "Please, enter the message!"
            }
          }
        }
    }
</script>

<style>

</style>
