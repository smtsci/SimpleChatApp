<template>
  <div class="chat-head container">
    <nav class="navbar" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="../index.html">
          <strong>Chat App</strong>
        </a>
      </div>
    </nav>
    <div class="card message-card">
      <header class="card-header">
        <p class="card-header-title welcome">
          Welcome, <strong> {{this.name}} </strong>
        </p>
      </header>
      <div class="card-content">
        <div class="content">
         <p class="message-title"><strong>Messages: </strong></p>
          <ul class="messages">
            <li v-for="message in messages" :key="message.id" style="list-style-type: none">
              <span class="from-message"><strong> {{message.name}}:</strong></span>
              <span class="messages-table">{{message.messages}}</span>
              <span class="messages-time" style="font-weight: lighter">{{message.time}}</span>
            </li>
          </ul>
        </div>
      </div>
      <footer class="card-footer">
        <div class="card-footer-item">
          <Messages :name="name" />
        </div>
      </footer>
    </div>
  </div>
</template>

<script>
    import Messages from '@/components/Messages'
    import database from '@/firebase/init'
    import moment from 'moment'
    export default {
        name: "ChatScreen",
        props: ['name'],
        components:{
          Messages
        },
        data(){
          return {
            messages : []
          }
        },
        created(){
          let ref = database.collection('messages').orderBy('time');

          ref.onSnapshot(snapshot => {
            snapshot.docChanges.forEach(change => {
              if (change.type == 'added'){
                let doc = change.doc
                this.messages.push({
                  id: doc.id,
                  name: doc.data().name,
                  messages: doc.data().messages,
                  time: moment(doc.data().time).format('LT')
                });
              }
            });
          });
        }
    }
</script>

<style>
  .chat-head a{
    font-size: 2.6em;
    color: hsl(171, 100%, 41%);
    font-weight: normal;
  }

  .chat-head a:hover{
    color: hsl(217, 71%, 53%);
  }

  .message-card{
    margin-top:50px;
  }

  .welcome{
    font-size:20px;
  }

  .message-title{
    font-size:20px;
  }

  .chat-input{
    width: 100%;
  }

  .messages-time{
    color:hsl(0, 0%, 86%);
  }
</style>
