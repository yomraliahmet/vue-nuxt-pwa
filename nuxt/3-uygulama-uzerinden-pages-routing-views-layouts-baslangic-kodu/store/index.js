import Vuex from "vuex"
import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state : {
            fetchedPosts : []
        },
        mutations : {
            setPosts(state, posts){
                state.fetchedPosts = posts;
            },
            addPost(state, post){
                state.fetchedPosts.push(post);
            },
            updatePost(state, editedPost){
                let post_index = state.fetchedPosts.findIndex(post => post.id == editedPost.id);
                console.log("Post Index: "+post_index);
                if(post_index != "-1"){
                    state.fetchedPosts[post_index] = editedPost;
                }
            }
        },
        actions : {
            nuxtServerInit(vuexContext, context){
                /*
                if(!process.client){
                    console.log("Server üzerinde çalışıyoruz.");
                }
                */
               
                return context.app.$axios.get(process.env.baseUrl + "/posts.json")
                .then(response => {
                    //console.log(response);
                    let data = response.data;
                    let postArray = [];
                    for(let key in data){
                        postArray.push({ id : key, ...data[key] });
                    }
                    vuexContext.commit("setPosts", postArray);
                })

                /*
                vuexContext.commit("setPosts",[
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
                ]);
                */
            },
            setPosts(vuexContext, posts){
                vuexContext.commit("setPosts", posts);
            },
            addPost(vuexContext, post){
              return this.$axios.post(process.env.baseUrl + "/posts.json", post)
                .then(response => {

                    // "addPost" mutation içindeki postu işaret ediyor
                    // "...post" içindeki id null olduğu için id tanımlamasını en sonda yapıyoruz.
                    vuexContext.commit("addPost", { ...post, id : response.data.name }); 
                });
            },
            updatePost(vuexContext, editedPost){
              return this.$axios.put(process.env.baseUrl + "/posts/"+ editedPost.id  +".json", editedPost)
                .then(response => {
                    vuexContext.commit("updatePost", editedPost); 
                    //this.$router.push("/admin");
                })
                .catch(e => console.log(e))
            }
        },
        getters : {
            getPosts(state){
               return state.fetchedPosts; 
            }
        }
    });
}

export default createStore;