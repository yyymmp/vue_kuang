对于vue-cli来说，
 npm uninstall -g vue-cli 最高只能安装2.x cli版本  创建项目使用
 vue webpack [项目名]，webpack是选择项目骨架，使用webpack打包来兼容浏览器

 如果想使用vue create [项目名]，需要使用Vue CLI 3版本，使用npm install -g @vue/cli，使用该脚手架创建项目时，使用npm run serve启动项目

 安装webpack
 ```npm install webpack -g```
 ```npm install webpack-cli -g```

 vue-router安装
 ```npm install vue-router --save-dev```

vue2安装vue-router
```npm install --legacy-peer-deps vue-router@3.5.2```

安装element-ui
```npm i element-ui -S```
安装sass加载器
```npm install sass-loader sass  --save-dev ```

```yaml main.js
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';
Vue.use(ElementUI);

new Vue({
  el: '#app',
  render: h => h(App)
});
```
#### 脚手架render函数
```js
new Vue({
  //将App组件放入容器中
  render: h => h(App),
}).$mount('#app')
```
为什么需要这个render函数，按照我们的写法应该是如下
```js
new Vue({
  el:"#app",
  template: "<App></App>",
  components:{
    App
  }
})
```
但此时运行报错，缺少模板解析器 解决：
1 使用render
2 引入带有模板解析器的Vue

因为此时引入的vue`import Vue from 'vue'`是一个残缺版本的vue，
可以引入完成版vue ->`import Vue from 'vue/dist/vue.js'`
因为vue.runtime,xxx.js没有模板解析器，所以不能使用template配置项，需要使用render函数接收到的createElement函数去指定具体内容
```js
new Vue({
  //将App组件放入容器中
  // render: h => h(App),
  render(createElement){
    //render函数的参数是一个函数
    console.log("render")
    //h1是html元素h1
    return createElement("h1","你好")
    //render 必须有返回才可以
    // return null;
  }
  //没有用this，使用箭头函数即可转化
  render: createElement => createElement(App),
}).$mount('#app')
```
### 脚手架配置
vue将配置文件都隐藏了，因此需要执行`vue inspect > out.js`输出所有配置到out.js文件中，但此文件不能修改配置
vue.config.js修改默认配置

### ref属性（代替原id属性）
代替id属性拿到dom document.getElementById("title")
```html
 <h1 v-text="msg" ref="title"></h1>
```
```js
 console.log(this.$refs.title)

```
### props属性
props属性优先处理接受的数据，如果想修改接受的数据，可以先赋值接受的数据，再对这个被赋值的对象进行操作
### mixin混入属性
对多个组件都可以复用的代码或者配置，可以抽取出来，引入之后再应用
混合文件
```js
export const max =  {
    methods:{
        showCommon(){
            alert(this.commonAttr)
        }
    },
    mounted() {
        console.log("混合mounted")
    }
}
```
mixins引入使用
```js
 import {max} from "../max";
    export default{
        mixins:[max]

    }

```
### vue插件
关键字：install函数 
### scope
所有的组件样式最后会被汇总，因此最后可能会出现冲突，使用scope属性限定该样式作用于该组件，只有App这个汇总组件不许要这个scope，生效全局
vue同样支持less，但需要les load  
```npm
npm i less-loader@7
``` 

### 脚手架结构分析

