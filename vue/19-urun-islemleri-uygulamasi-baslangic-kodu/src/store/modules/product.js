import Vue from "vue";
import { router } from "../../router"

// Verilerin tutulacağı alanı ifade ediyor.
const state = {
    products : []
}

// Verileri almak için kullanılıyor.
const getters = {
    getProducts(state){
        return state.products;
    },
    getProduct(state){
       return key => state.products.filter(element => {
          return element.key == key; 
        });
    }
}

// "state" içindeki verileri güncellemek için kullanılır.
const mutations = {
    updateProductList(state, product){
        state.products.push(product);
    }
}

// Dışardan api(ajax v.b) veri çekip "state" içindeki verileri güncellemek istersek "actions" kullanıyoruz.
// Yaptığı işlem "mutations" içindeki fonksiyonları tetiklemek şeklinde oluyor. Bunu "commit" parametresi ile yapıyor.
const actions = {
    initApp({ commit }){
        // Vue Resource işlemleri
        Vue.http.get("https://urun-islemleri-prod-dd37f.firebaseio.com/product.json")
        .then(response => {
            console.log(response);
            let data = response.body;
            for(let key in data){
                data[key].key = key;
                commit("updateProductList", data[key]);
            }
        })
    },
    // "payload" dışardan gönderilen parametreleri almak için kullanılır.
    saveProduct({ dispatch, commit, state }, product){
        // Vue Resource İşlemleri
        Vue.http.post("https://urun-islemleri-prod-dd37f.firebaseio.com/product.json", product)
        .then((response) => {

            /*** Ürün listesinin güncellenmesi ****/
            product.key = response.body.name;
            commit("updateProductList", product);

            /**** Alış, Satış, Bakiye bilgilerinin güncellenmesi. ****/

            let tradeResult = {
                purchase : product.price,
                sale : 0,
                count : product.count
            }

            dispatch("setTradeResult", tradeResult);

            router.replace("/");
            

        });
    },
    sellProduct({ state, commit, dispatch }, payload){
        // Vue Resource İşlemleri

        // pass by reference
        // pass by value..

        let product = state.products.filter(element => {
            return element.key == payload.key;
        });

        if(product){

            let totalCount = product[0].count - payload.count;
            Vue.http.patch("https://urun-islemleri-prod-dd37f.firebaseio.com/product/"+ payload.key + ".json", { count : totalCount })
            .then(response => {
                product[0].count = totalCount;

                let tradeResult = {
                    purchase : 0,
                    sale : product[0].price,
                    count : payload.count
                }
    
                dispatch("setTradeResult", tradeResult);
                router.replace("/");

            });
        }

    }
}


export default {
    state,
    getters,
    mutations,
    actions
}