<template>
    <div class="demo"><h1>{{stuName}}</h1>
        <h1>{{age}}</h1>
<!--        <button @click="sendStuName()">把学生名传递给App</button>-->
<!--        <button @click="unbind()">解绑自定义事件(atguigu)</button>-->
        <button @click="sendTo()">全局事件总线 </button>
    </div>
</template>
<style>
    .demo {
        background-color: #42b983;
    }
</style>
<script>
    import pubsub from 'pubsub-js'
    //es模块暴露方式
    //1   export const school = Vue.extend({
    //2   在最后变暴露变量 export {school}
    //3   默认暴露 export default school
    export default {
        name: 'Student',
        //组件一定要使用函数写法
        data() {
            return {
                stuName: "jlz",
                age: 18,
                commonAttr: "混合学生"
            }
        },
        methods: {
            showName() {
                alert(this.stuName)
            },
            sendStuName() {
                //触发vc上绑定的自定义事件
                this.$emit('atguigu', this.stuName)

                this.$emit('demo');
            },

            //触发解绑自定义事件
            unbind(){
                //单个解绑
                this.$off("atguigu")
                //多个解绑
                this.$off(["atguigu",'demo'])
                //解绑全部
                // this.$off();
            },
            sendTo(){
                this.$bus.$emit('hello',this.stuName);
            }
        },
        mounted() {
            //绑定事件hello
            this.$bus.$on("sendToStu",(data)=> {
                console.log("stu收到信息",data)
            })

            this.pubId =  pubsub.subscribe("hello", (msgName,data)=> {
                //this
                //在vue框架中,使用function this是未定义的  使用箭头函数
                console.log(this)
                console.log("Stu回调执行 有人发布了hello事件",msgName,data)
            })

        },
        beforeDestroy() {
            //取消订阅
            pubsub.unsubscribe( this.pubId )

        }
    }
</script>
