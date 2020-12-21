<template>
    <post-form @submit="savePost($event)" />
</template>
<script>
import axios from "axios"
import PostForm from "@/components/admin/PostForm"
export default {
    components : {
        PostForm
    },
    methods : {
        savePost(post){
           // console.log(post);
            this.$store.dispatch("addPost", post)
            .then(response => {
                this.$router.push("/admin");
            })
        }
    }
}
</script>