import Vuex from "vuex"
import Cookie from "js-cookie"
import axios from "axios"

const createStore = () => {
    return new Vuex.Store({
        state : {
            authKey : null
        },
        mutations : {
            setAuthKey(state, authKey){
                state.authKey = authKey;
            },
            clearAuthKey(state){
                Cookie.remove("authKey");
                Cookie.remove("expiresIn");
                if(process.client){
                    localStorage.removeItem("authKey");
                    localStorage.removeItem("expiresIn");
                }
                state.authKey = null;
            }
        },
        actions : {
            nuxtServerInit(vuexContext, context){
               let cookie = context.req.headers.cookie.split(";").find(c => c.trim().startsWith("authKey"));
               
               if(cookie){
                    cookie = cookie.split("=")[1];
                    console.log(cookie);
               } 
            },
            initAuth(vuexContext, req){
                let token;
                let expiresIn;
                if(req){
                    // Server üzerinde çalışıyoruz.
                    if(!req.headers.cookie){
                        return;
                    }
                    // Cookie üzerinden token elde etmek.

                    token = req.headers.cookie.split(";").find(c => c.trim().startsWith("authKey"));
                    if(token){
                         token = token.split("=")[1];
                         console.log(token);
                    } 

                    expiresIn = req.headers.cookie.split(";").find(e => e.trim().startsWith("expiresIn"));
                    if(expiresIn){
                        expiresIn = expiresIn.split("=")[1];
                        console.log(expiresIn);
                    } 

                }else{
                    // Client üzerinde çalışıyoruz.

                    token = localStorage.getItem("authKey");
                    expiresIn = localStorage.getItem("expiresIn");
                }

                if(new Date().getTime() > + expiresIn || !token){
                    vuexContext.commit("clearAuthKey");
                }

                vuexContext.commit("setAuthKey", token);
            },
            authUser(vuexContext, authData){

                let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=";
                if(authData.isUser){
                    authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=";
                }
        
                authLink += process.env.FIREBASE_API_KEY;
        
                return axios.post(authLink,{
                    email : authData.user.email, 
                    password : authData.user.password,
                    returnSecureToken : true
                })
                .then(response => {

                    // +response.data.expiresIn yazımında baştaki + işareti string değeri integer değere çevirir. 
                    let expiresIn = new Date().getTime() + +response.data.expiresIn * 1000;
                   // let expiresIn = new Date().getTime() + 5000;

                    Cookie.set("authKey",response.data.idToken);
                    Cookie.set("expiresIn", expiresIn);
                    localStorage.setItem("authKey", response.data.idToken);
                    localStorage.setItem("expiresIn", expiresIn);
                    vuexContext.commit("setAuthKey", response.data.idToken);
                });
            },
            logout(vuexContext){
                vuexContext.commit("clearAuthKey");
            }
        },
        getters : {
            isAuthenticated(state){
                return state.authKey != null
            },
            getAuthKey(state){
                return state.authKey
            }
        }
    });
}

export default createStore