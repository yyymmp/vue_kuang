<template>
    <div class="demo"><h1>{{SchoolName}}</h1>
        <h1 @click="showName">{{address}}</h1></div>
</template>
<style>
    .demo {
        background-color: #42b983;
    }
</style>
<script>
    //es模块暴露方式
    //1   export const school = Vue.extend({
    //2   在最后变暴露变量 export {school}
    //3   默认暴露 export default school
    export default{
        name: 'School',
        //组件一定要使用函数写法
        data() {
            return {
                SchoolName: "北京大学",
                address: "中国"
            }
        },
        methods: {
            showName() {
                alert(this.schoolName)
            }
        }

    }
</script>
