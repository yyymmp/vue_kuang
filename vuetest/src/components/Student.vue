<template>
    <div class="demo"><h1>{{StuName}}</h1>
        <h1 @click="showCommon">{{age}}</h1></div>
</template>
<style>
    .demo {
        background-color: #42b983;
    }
</style>
<script>
    import {max} from "../max";
    //es模块暴露方式
    //1   export const school = Vue.extend({
    //2   在最后变暴露变量 export {school}
    //3   默认暴露 export default school
    export default {
        name: 'Student',
        //组件一定要使用函数写法
        data() {
            return {
                StuName: "jlz",
                age: 18,
                commonAttr:"混合学生"
            }
        },
        methods: {
            showName() {
                alert(this.stuName)
            },
        },
        //应用上混合
        mixins:[
            max
        ]

    }
</script>
