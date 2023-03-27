<template>
    <li>
        <label>
            <input type="checkbox" :checked="todo.done" @change="handleCheck(todo.id)"/>
            <span>{{todo.title}}</span>
        </label>
            <button class="btn btn-danger" @click="delTodo(todo.id)">删除</button>
    </li>
</template>
<style scoped>
    /*item*/
    li {
        list-style: none;
        height: 36px;
        line-height: 36px;
        padding: 0 5px;
        border-bottom: 1px solid #ddd;
    }

    li label {
        float: left;
        cursor: pointer;
    }

    li label li input {
        vertical-align: middle;
        margin-right: 6px;
        position: relative;
        top: -1px;
    }

    li button {
        float: right;
        display: none;
        margin-top: 3px;
    }

    li:before {
        content: initial;
    }

    li:last-child {
        border-bottom: none;
    }
    li:hover{
        background-color: #ddd;
    }
    li:hover button{
        display: block;
    }
</style>
<script>
    export default {
        //声明接收todo对象
        props:['todo','checkTodo','deleteTodo'],
        name: 'Item',
        //组件一定要使用函数写法
        data() {
            return {}
        },
        methods: {
            handleCheck(id){
                console.log(id)
                this.checkTodo(id);
                //通知App组件将数据状态更改
            },
            delTodo(id){
                //confirm交互
                if (confirm("确认删除吗")){
                    console.log(id)
                    //通知App.vue删除
                    this.deleteTodo(id)
                }
            }
        }
    }
</script>
