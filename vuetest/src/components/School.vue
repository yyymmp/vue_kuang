<template>
    <div class="demo">
        <h1 @click="sendtoApp()">{{SchoolName}}</h1>
        <h1>{{address}}</h1>

        <button @click="sendSchoolName()">把学校名字传递给App</button>
    </div>

</template>
<script>
    //es模块暴露方式
    //1   export const school = Vue.extend({
    //2   在最后变暴露变量 export {school}
    //3   默认暴露 export default school
    export default{
        name: 'School',
        props:["getSchoolName"],
        //组件一定要使用函数写法
        data() {
            return {
                SchoolName: "北京大学",
                address: "中国",
                commonAttr:"混合学校"
            }
        },
        methods: {
            showName() {
                alert(this.schoolName)
            },
            sendSchoolName(){
                this.getSchoolName(this.SchoolName);
            }

        },

    }
</script>
<style scoped lang="less">
.demo{
    background-color: rebeccapurple;
}
</style>
