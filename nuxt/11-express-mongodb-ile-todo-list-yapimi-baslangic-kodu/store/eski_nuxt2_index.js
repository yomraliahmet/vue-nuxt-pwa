import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state : {
      todos : []
    },
    mutations : {
      setTodos(state, todos){
        state.todos = todos;
      },
      addTodo(state, todo){
        state.todos.push(todo);
      },
      deleteTodo(state, todo){
        let todoIndex = state.todos.findIndex(t => t._id == todo._id);
        if(todoIndex > -1){
          state.todos.splice(todoIndex,1);
        }

      },
      updateTodo(state, todo){
        let todoIndex = state.todos.findIndex(t => t._id == todo._id);
        if(todoIndex > -1){
          state.todos.splice(todoIndex,1, todo);
          //state.todos[todoIndex] = todo;
        }

      }
    },
    actions : {
      nuxtServerInit(vuexContext, context){
        // Axios
       return context.$axios.get("/get-all")
        .then(response => {
         // console.log(response.data.docs);
          vuexContext.commit("setTodos", response.data.docs);
        });
      },
      addTodo(vuexContext, todo){
        // Axios

        this.$axios.post("/save", { todoText : todo })
        .then(response => {
            let newTodo = {
              _id : response.data.data._id,
              text : todo
            }
            vuexContext.commit("addTodo", newTodo);
        });


      },
      deleteTodo(vuexContext, todo){
        // Axios
        this.$axios.delete("/delete", { data : { todo : todo } })
        .then(response => {
          vuexContext.commit("deleteTodo", todo);
        });

      },
      updateTodo(vuexContext, updatedTodo){
        // Axios
        this.$axios.put("/update", { todo : updatedTodo })
        .then(response => {
          vuexContext.commit("updateTodo", updatedTodo);
        });

      },
    },
    getters : {
      getTodos(state){
        return state.todos;
      }
    }
  });
}

export default createStore;
