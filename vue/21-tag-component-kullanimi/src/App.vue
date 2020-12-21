<template>
  <div>
    <vtag v-model="tags" color="danger"></vtag>
  </div>
</template>

<script>
export default {
  data () {
    return {
      tags: 'abi,hala,dayi'
    }
  }
}
</script>

<style>
body{
  font-family: sans-serif;
}
</style>
