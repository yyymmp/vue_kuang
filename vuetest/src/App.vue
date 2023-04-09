<template>
    <div>
        <img src="./assets/logo.png" alt="">
        <h1 v-text="msg" ref="title"></h1>
        <h1>学生姓名是:{{stuName}}</h1>
        <button @click="showDom">点击输出h1</button>
        <!--通过父组件给子组件传递函数类型的props实现子给父传递数据        -->
        <School :getSchoolName="getSchoolName"></School>

        <!--给vc实例绑定了一个atguigu事件        第一种写法 @-->
        <Student @atguigu="getStuName" @demo="m1" @click.native="show"></Student>

        <!--给vc实例绑定了一个atguigu事件        第二种写法 ref-->
<!--                <Student ref="student"></Student>-->


        <Count></Count>
    </div>
</template>
<style>
</style>
<script>
//汇总所有的组件
import School from "./components/School";
import Student from "./components/Student";
import Count from "@/components/Count";

export default {
    name: 'App',
    data() {
        return {
            msg:"欢迎你",
            stuName:''
        }
    },
    components: {
        School,
        Student,
        Count
    },
    methods: {
        showDom(){
            //1 通过document获取
            // document.getElementById("title")
            //2使用vue方式获取 元素需要使用ref属性 id属性的代替者
            console.log(this.$refs.title)
        },
        getSchoolName(name){
            console.log("App 收到学校名",name)
        },
        getStuName(name){
            console.log("atguigu 事件被调用",name)
            this.stuName = name
        },
        m1(){
            console.log("demo 事件被触发")
        }
    },
    mounted() {
        //给this.$refs.student即vc实例绑定 on 当vc实例调用atguigu事件时,触发this.getStuName函数
        // this.$refs.student.$on("atguigu",this.getStuName)
        //仅仅调用一次生效
        // this.$refs.student.$once("atguigu",this.getStuName)
    }
}
</script>
