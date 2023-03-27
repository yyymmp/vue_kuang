/*
  main.js:项目的入口文件
 */
/*
引入 Vue
 */
import Vue from 'vue'
/*
 App 他是所有组件的父组件
 */
import App from './App.vue'

Vue.config.productionTip = false

/*
创建vVue实例对象-vm
 */
new Vue({
  //将App组件放入容器中
  render: h => h(App),

  //分析
  // render(createElement){
  //   //render函数的参数是一个函数
  //   console.log("render")
  //   //h1是html元素h1
  //   return createElement("h1","你好")
  //   //render 必须有返回才可以
  //   // return null;
  // }
}).$mount('#app')

