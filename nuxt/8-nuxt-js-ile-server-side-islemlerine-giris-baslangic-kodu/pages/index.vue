<template>
  <div class="conrainer">
    <input type="text" v-model="title">
    <button @click="sendData" class="button--green">Veri Gönder</button>
    <p>{{ response }}</p>
  </div>
</template>
<script>

import axios from "axios"

export default {
  data(){
    return {
      response : null,
      title : null
    }
  },
  methods : {
    sendData(){
      axios.post("http://localhost:3000/api/save", {
        title :  this.title
      })
      .then(response => {
        this.response = response.data.title;
      });
    }
  }
}
</script>