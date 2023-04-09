//该文件用于创建vuex中最为核心的store
import Vuex from 'vuex'
import Vue from "vue";
//使用Vuex
Vue.use(Vuex)
//1 准备actions:用于相应组件中的动作
const actions = {
    jia: function (context, val) {
        console.log("actions 中的jia 被调用")
        context.commit("JIA", val)
    },

    // dec(context, val) {
    //     console.log("actions 中的dec 被调用")
    //     context.commit("DEC", val)
    // },

    odd(context, val) {
        console.log("actions 中的odd 被调用")
        if (context.state.sum % 2) {
            context.state.sum += val
        }
    }
}
//2 准备mutations:用于操作数据(state)
const mutations = {
    JIA: function (state, val) {
        // console.log("mutations JIA被调用",state,val)
        state.sum += val
    },
    DEC: function (state, val) {
        state.sum -= val
    }
}
//3 准备state:用于存储数据
const state = {
    sum: 0,
    school:"sgg",
    subject:"前端"
}
//4 getter配置项 用于对state数据进行加工
const getters = {
    bigSum(state) {
        //必须ret
        return state.sum * 10
    }
}
//创建store,并传入配置 并暴露store
export default new Vuex.Store({
    actions: actions,
    mutations: mutations,
    state: state,
    getters: getters
});

