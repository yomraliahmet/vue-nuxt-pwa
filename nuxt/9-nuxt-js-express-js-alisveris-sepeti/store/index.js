import Vuex from "vuex"

const createStore = () => {
  return new Vuex.Store({
    state : {
      products : [],
      cart : [],
      totalPrice : 0.0,
    },
    mutations : {
      setProducts(state, products){
        state.products = products;
      },
      setCart(state, cart){
        state.cart = cart;
      },
      setTotalPrice(state, totalPrice){
        state.totalPrice = totalPrice;
      }
    },
    actions : {
      nuxtServerInit(vuexContext, context){

        return context.app.$axios.get("/api/")
        .then(response => {
         // console.log(response.data.products[0]);
          vuexContext.commit("setProducts", response.data.products);
          vuexContext.commit("setCart", response.data.cart.items);
          vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
        });

      },

      addToCart(vuexContext, product){
        this.$axios.post("/api/add-to-cart",{ product : product })
        .then(response => {
         // console.log(response.data.cart.items);
         vuexContext.commit("setCart", response.data.cart.items);
         vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
        })
      },
      removeProduct(vuexContext, product){
        this.$axios.post("/api/remove-product",{ product : product })
        .then(response => {
          vuexContext.commit("setCart", response.data.cart.items);
          vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
        });
      },
      changeCount(vuexContext, product){
        this.$axios.post("/api/change-count", { product : product })
        .then(response => {
          vuexContext.commit("setCart", response.data.cart.items);
          vuexContext.commit("setTotalPrice", response.data.cart.totalPrice);
        })
      }
    },
    getters : {
      getProducts(state){
        return state.products;
      },
      getCart(state){
        return state.cart;
      },
      getTotalPrice(state){
        return state.totalPrice;
      }
    }
  });
}


export default createStore
