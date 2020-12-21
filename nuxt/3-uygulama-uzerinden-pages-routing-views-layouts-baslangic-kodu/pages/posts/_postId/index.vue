<template>
    <post-detail :post="fetchedPost"/>
</template>
<script>
import axios from "axios"
import PostDetail from "@/components/post/PostDetail"
export default {
  components : {
      PostDetail
  },
  asyncData(context){
    return axios.get("https://kose-yazilari-2325d-default-rtdb.firebaseio.com/posts/"+ context.params.postId +".json")
    .then(response => {
      return {
          fetchedPost : response.data
        }
    })
  }
  /*
  asyncData(context, callback) {

    //return new Promise().catch(e => {
      //context.error(new Error());
    //});

    setTimeout(() => {
      callback(null, {
      //callback(new Error(), {
        fetchedPost : {
            id : 1,
            title : "Nuxt.js çalışıyoruz 1, ID: "+ context.params.postId,
            subTitle : "Geceden beri gözümüze uyku girmedi, bu nasıl bir iş anlamadım.",
            text : "Geceden beri gözümüze uyku girmedi, bu nasıl bir iş anlamadım. Geceden beri gözümüze uyku girmedi, bu nasıl bir iş anlamadım.",
            author : "Ahmet YILDIRIM"       
        }
      });
    },1500);
  },
  */
}
</script>
<style scoped>

</style>