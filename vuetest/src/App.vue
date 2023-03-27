<template>
    <div>
        <img src="./assets/logo.png" alt="">
        <h1 v-text="msg" ref="title"></h1>
        <button @click="showDom">点击输出h1</button>
        <School></School>
        <Student></Student>
    </div>
</template>
<style>
</style>
<script>
//汇总所有的组件
import School from "./components/School";
import Student from "./components/Student";

export default {
    name: 'App',
    data() {
        return {
            msg:"欢迎你"
        }
    },
    components: {
        School,
        Student
    },
    methods: {
        showDom(){
            //1 通过document获取
            // document.getElementById("title")
            //2使用vue方式获取 元素需要使用ref属性 id属性的代替者
            console.log(this.$refs.title)

        }
    }
}
</script>
