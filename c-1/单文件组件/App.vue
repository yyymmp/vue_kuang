<template>
<div>
    <School></School>
    <Student></Student>
</div>
</template>
<style>
</style>
<script>
//汇总所有的组件
import School from "./School";
import Student from "./Student";

export default {
    name:'App',
    components:{
        School,
        Student
    }
}
</script>
