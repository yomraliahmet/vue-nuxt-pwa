import Vuex from "vuex"

const creaateStore = () => {
    return new Vuex.Store({
        state : {
            courses : []
        },
        mutations : {
            setCourses(state, courses){
                state.courses = courses;
            }
        },
        actions : {
            nuxtServerInit(vuexContext, context){
                /*
                return context.$axios.get("/")
                .then(response => {
                    console.log(response.data.courses);
                    vuexContext.commit("setCourses",response.data.courses);
                })*/
                
                return context.$axios.get("/mongodb-get-data")
                .then(response => {
                    console.log(response.data.courses);
                    vuexContext.commit("setCourses",response.data.courses);
                });
            }
        },
        getters : {
            getCourses(state){
                return state.courses;
            }
        }
    });
}

export default creaateStore;