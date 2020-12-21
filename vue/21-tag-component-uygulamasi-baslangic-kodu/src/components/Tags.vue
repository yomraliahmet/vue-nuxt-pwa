<template>
    <div class="tag-container">
        
        <Tag 
            v-for="(tag, index) in tags"
            :key="index"
            :tag="tag"
            :index="index"
            :tagColor="color"
            @removeOneTagEvent="removeOneTag($event)"
         />

        <input 
        autofocus
        ref="tagInput"
        type="text" 
        @keydown.enter="addTag"
        @keydown.backspace="removeTag">
        <div class="error" v-if="error">Bu etiket daha önceden eklenmiş!</div>
  </div> 
</template>
<script>
import Tag from "./Tag"

export default {
    components : {
        Tag
    },
    data(){
        return {
            tags : [],
            error: false
        }
    },
    methods : {
        addTag(event){
            let text = event.target.value.replace(/\s/g, '');
            let matchedTag = false;
            
            if(text !== ''){

                this.tags.forEach(tag => {
                if(tag.toLowerCase() === text.toLowerCase()){
                    matchedTag = true;
                }
                });

                if(!matchedTag){
                    this.tags.push(text);
                    event.target.value = '';
                }else{
                    this.error = true;
                    setTimeout(() => {
                        this.error = false;
                    },2000);
                }
            }
        },
        removeTag(event){
            if(event.target.value === ''){
                this.tags.splice(this.tags.length - 1, 1);
            }
        },
        removeOneTag(index){
            this.tags.splice(index, 1);
            this.$refs.tagInput.focus();
        }
    },
    props : {
        value : {
            required : false
        },
        color : {
            required : false,
            type : String,
            default : "primary"
        }
    },
    created(){
        if(this.value){
            if(this.value.length > 0){
                this.tags = this.value.split(",")
            }
        }
    },
    watch : {
        tags(){
            this.$emit("input", this.tags.join(","));
        }
  }
    
}
</script>
<style scoped>
  .tag-container{
    border: 1px solid #ccc;
    padding: 10px;
  }

  input{
    outline: none;
    height: 30px;
    width: 100px;
    font-size: 14px;
  }

  .error{
    font-size: 12px;
    color:red;
    margin-top: 5px;
  }
</style>