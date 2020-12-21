<template>
  <div class="container">
    <!-- v-model componente "value" gönderir componentten "input" alır -->
    <app-tags v-model="tags" color="primary" />
    <app-tags v-model="tags2" color="danger" />
    <app-tags v-model="tags2" color="info" />
    <app-tags v-model="tags2" color="success" />
    <app-tags v-model="tags2" color="warning" />
    <app-tags v-model="tags2" color="secondary" />

  </div>
</template>

<script>
import Tags from "./components/Tags"
export default {
  components : {
    appTags : Tags
  },
  data(){
    return {
      tags : "deneme,test",
      tags2 : "deneme,test,salla,yolla",
    }
  }
}
</script>

<style>
  body{
    font-family: sans-serif;
  }
</style>
