<template>
    <ul class="todo-main">
        <MyItem v-for="todo in todos" :todo="todo" :key="todo.id" :checkTodo="checkTodo" :deleteTodo='deleteTodo'>
            todo.title
        </MyItem>

    </ul>
</template>
<style scoped>
    /*main*/
    .todo-main {
        margin-left: 0;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding: 0;
    }

    .todo-empty {
        height: 40px;
        line-height: 40px;
        border: 1px solid #ddd;
        border-radius: 2px;
        padding-left: 5px;
        margin-top: 10px;
    }
</style>
<script>
    import MyItem from "@/components/MyItem";

    export default {
        name: 'List',
        props:['todos','checkTodo','deleteTodo'],
        //组件一定要使用函数写法
        data() {
            return {

            }
        },
        components: {
            MyItem
        },
        methods: {}
    }
</script>
