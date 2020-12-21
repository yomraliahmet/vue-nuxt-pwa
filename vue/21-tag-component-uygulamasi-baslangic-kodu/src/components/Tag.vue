<template>
    <span class="tag" :class="selectedTheme">
      <span class="content">{{ tag }}</span>
      <span class="close" @click="$emit('removeOneTagEvent', index)">X</span>
    </span>
</template>
<script>
export default {
    props : ["tag", "index", "tagColor"],
    data(){
      return {
        selectedTheme : null
      }
    },
    created(){
      this.selectedTheme = this.tagColor;
    }
}
</script>
<style scoped>

  .success{
    color: #155724;
    background-color: #D5EDDB;
    border-color: #C3E6CB;
  }

  .primary{
    color: #004085;
    background-color: #cce5ff;
    border-color: #b8daff;
  }

  .secondary{
    color: #383d41;
    background-color: #e2e3e5;
    border-color: #d6d8db;
  }

  .info{
    color: #0c5460;
    background-color: #d1ecf1;
    border-color: #bee5eb;
  }

  .warning{
    color: #856404;
    background-color: #fff3cd;
    border-color: #ffbbea;
  }

  .danger{
    color: #721c24;
    background-color: #f8d7da;
    border-color: #f5c6cb;
  }

  .tag{
    padding: 10px;
    cursor: default;
    margin-left: 3px;
    margin-right: 3px;
    border-radius: 3px;
  }

  .tag * {
      font-size: 14px;
  }

  .tag .close{
    font-size: 12px;
    font-weight: bold;
    cursor: pointer;
  }
</style>