// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
//引入路由 自动扫描当前目录下的index.js
import router from "./router"
//导入ElementUI
import ElementUI  from "element-ui"
import 'element-ui/lib/theme-chalk/index.css';

Vue.config.productionTip = false

Vue.use(ElementUI);
Vue.use(router);
/* eslint-disable no-new */
new Vue({
  el: '#app',
  //配置路由 ,代替Vue.use(router);
  router,
  components: { App },
  render: h => h(App)
})
