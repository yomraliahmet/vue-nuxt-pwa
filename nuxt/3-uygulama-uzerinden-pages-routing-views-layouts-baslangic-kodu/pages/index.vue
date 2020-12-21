<template>
   <div>
       <post-list :posts="fetchedPosts" />
       <about/>
   </div>
</template>
<script>
import PostList from "@/components/post/PostList"
import About from "@/components/home/About"
export default {
  components : {
      PostList,
      About
  },
  /*
  data(){
      return {
         fetchedPosts : [],
      }
  },
  */
  created(){
      //this.$store.dispatch("setPosts", this.fetchedPosts);
  },
  computed : {
      fetchedPosts(){
          return this.$store.getters.getPosts
      }
  },
  /*
  asyncData(context, callback) {
      //console.log(context);
      setTimeout(function(){
        callback(null, {
            fetchedPosts : [
                {
                    id : 1,
                    title : "Nuxt.js çalışıyoruz 1",
                    subTitle : "Geceden beri gözümüze uyku girmedi, bu nasıl bir iş anlamadım.",
                    text : "Geceden beri gözümüze uyku girmedi, bu nasıl bir iş anlamadım. Geceden beri gözümüze uyku girmedi, bu nasıl bir iş anlamadım.",
                    author : "Ahmet YILDIRIM"
                },
                {
                    id : 2,
                    title : "C# Hakkında temel bilgiler",
                    subTitle : "Geceden beri gözümüze uyku girmedi, bu nasıl bir iş anlamadım.",
                    text : "Geceden beri gözümüze uyku girmedi, bu nasıl bir iş anlamadım. Geceden beri gözümüze uyku girmedi, bu nasıl bir iş anlamadım.",
                    author : "Osman UZUN",
                },
            ]
        });
      },2000);
  }
  */

}
</script>
<style>

</style>