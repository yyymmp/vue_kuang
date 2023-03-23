<template>
<div>
    <img src="./assets/logo.png" alt="">
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
    name:'App',
    components:{
        School,
        Student
    }
}
</script>
