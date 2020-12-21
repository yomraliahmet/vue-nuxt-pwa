const state = {
    counter : 0,
}

const getters = {
    getDoubleCounter(state){
        return state.counter * 2;
    },
    stringCounter(state){
        return state.counter + ". kez tıklandı."
    },
}

const mutations = {
    increaseCounter(state, payload){
        state.counter += payload;
    },
    decreaseCounter(state){
        state.counter--;
    }, 
}
const actions = {
    increment({commit}){
        commit("increaseCounter", 1);
    },
    decrement({commit}){
        commit("decreaseCounter");
    },
    incrAsync({commit}, payload){
        setTimeout(() => {
            commit("increaseCounter", 1);
        }, payload.time);
    },
}

export default {
    state,
    getters,
    mutations,
    actions
}