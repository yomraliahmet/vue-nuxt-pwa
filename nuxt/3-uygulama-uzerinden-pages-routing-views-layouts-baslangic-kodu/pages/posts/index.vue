<template>
   <div>
       <post-list :posts="fetchedPosts" />
   </div>
</template>
<script>
import PostList from "@/components/post/PostList"
export default {
  components : {
      PostList
  },
  computed : {
      fetchedPosts(){
          return this.$store.getters.getPosts
      }
  },
}
</script>
<style scoped>

</style>