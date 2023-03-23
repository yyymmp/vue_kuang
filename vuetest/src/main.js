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
}).$mount('#app')
