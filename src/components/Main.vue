<template>
  <div class="container chat-head">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="../index.html">
          <strong>Chat App</strong>
        </a>
      </div>
    </nav>
    <form @submit.prevent="enterUsername">
      <div class="field username-input">
        <label class="label">Username</label>
        <div class="control has-icons-left has-icons-right username">
          <input class="input is-success" type="text" placeholder="Username.." v-model="name">
          <span class="icon is-small is-left">
          <i class="fas fa-user"></i>
        </span>
          <p class="feedback-color" v-if="feedback"> {{feedback}}</p>
        </div>
      </div>
      <div class="field is-grouped">
        <div class="control">
          <button class="button is-link">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      name : null,
      feedback : null
    }
  },
  methods: {
    enterUsername(){
      if(this.name){
        this.$router.push({ name: 'ChatScreen', params: {name: this.name}});
      } else{
        this.feedback = 'Please, enter the username!'
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
  .chat-head a{
    font-size: 2.6em;
    color: hsl(171, 100%, 41%);
    font-weight: normal;
  }

  .chat-head a:hover{
    color: hsl(217, 71%, 53%);
  }

  .username-input{
    margin-top:50px;
    width: 30%;
  }

  .feedback-color{
    color: hsl(348, 100%, 61%);
  }
</style>
