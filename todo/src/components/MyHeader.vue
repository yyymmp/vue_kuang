<template>
    <div class="todo-header">
        <input type="text" placeholder="请输入你的任务名称，按回车键确认" @keyup.enter="add"/>
    </div>
</template>
<style scoped>
    .todo-header input {
        width: 560px;
        height: 28px;
        font-size: 14px;
        border: 1px solid #ccc;
        border-radius: 4px;
        padding: 4px 7px;
    }

    .todo-header input:focus {
        outline: none;
        border-color: rgba(82, 168, 236, 0.8);
        box-shadow: inset 0 1px 1px rgba(0, 0, 0, 0.075), 0 0 8px rgba(82, 168, 236, 0.6);
    }
</style>
<script>
    import {nanoid} from 'nanoid'
    //es模块暴露方式
    //1   export const school = Vue.extend({
    //2   在最后变暴露变量 export {school}
    //3   默认暴露 export default school
    export default {
        name: 'Header',
        // props:['addTodo'],
        methods: {
            add(e){
                if (!e.target.value){
                    return alert("输入不能为空");
                }
                //获取输入框的值
                console.log(e.target.value);
                const  addTodo = {
                  id:nanoid(),
                  title:e.target.value,
                  done:false
                };
            //   调用父组件传递过来的函数
            //     this.addTodo(addTodo)

                //使用自定义事件
                this.$emit("addTodo",addTodo)
                e.target.value = ''
            }
        }
    }
</script>
