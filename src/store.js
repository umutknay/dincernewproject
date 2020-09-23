import Vue from "vue";
import Vuex from "vuex";
import axios from "axios"
import { router } from "@/router/index.js";

Vue.use(Vuex);

 export const store = new Vuex.Store({
//export default new Vuex.Store({
    state : {
        token : "",
        fbApiKey : "AIzaSyAsKQgrRBYK5yNom081iYFRhTE71MQRyRs"
    },

    //senkron metodlar için mutation kullanılır.
    mutations : {
        setToken(state,token){
            state.token = token;
        },
        clearToken(state){
            state.token = "";
            localStorage.removeItem("token");
        },
        datetime(state,datetime){
            state.datetime =datetime;
        }
    },

    actions : {

        initAuth({commit, dispatch}){
            let token = localStorage.getItem("token");
            if(token){
                commit("setToken",token);
                router.push("/");
            }else{
                  router.push("/auth");
            }
        },

        login({commit, dispatch, state}, authData){

            let authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signUp?key="
            if(authData.isUser){
                authLink = "https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key="
            }

            return axios.post(
            authLink + "AIzaSyAsKQgrRBYK5yNom081iYFRhTE71MQRyRs",
            { email : authData.email, password : authData.password, returnSecureToken : true }
            ).then(response => {
               // console.log(response)
                commit("setToken",response.data.idToken)
                localStorage.setItem("token",response.data.idToken);
            })
        },
        logout({ commit, dispatch, state }){
            commit("clearToken");
        },
        getNow({commit,dispatch,state}) {
            const today = new Date();
            const date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
            const dateTime = date +' '+ time;
            this.timestamp = dateTime;
            commit("datetime",this.timestamp);
        }

    },
    getters : {
        isAuthenticated(state){
            return state.token !== ""
        }
    }

});