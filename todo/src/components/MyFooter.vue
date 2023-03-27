<template>
    <div class="todo-footer" v-show="total">
        <label>
                <input type="checkbox" :checked="isAll" @change="checkAll"/>
        </label>
        <span>
          <span>已完成{{ doneTotal }}</span> / 全部{{ total }}
        </span>
        <button class="btn btn-danger" @click="clear()">清除已完成任务</button>
    </div>
</template>
<style scoped>
/*footer*/
.todo-footer {
    height: 40px;
    line-height: 40px;
    padding-left: 6px;
    margin-top: 5px;
}

.todo-footer label {
    display: inline-block;
    margin-right: 20px;
    cursor: pointer;
}

.todo-footer label input {
    position: relative;
    top: -1px;
    vertical-align: middle;
    margin-right: 5px;
}

.todo-footer button {
    float: right;
    margin-top: 5px;
}
</style>
<script>
//es模块暴露方式
//1   export const school = Vue.extend({
//2   在最后变暴露变量 export {school}
//3   默认暴露 export default school
export default {
    name: 'Footer',
    props: ["todos",'checkAllTodo','clearAll'],
    //组件一定要使用函数写法
    data() {
        return {}
    },
    methods: {
        checkAll(e){
            console.log(e.target.checked)
            this.checkAllTodo(e.target.checked);
        },
        clear(){
            this.clearAll()
        }
    },
    computed: {
        doneTotal() {
            // let filter = this.todos.filter((todo)=>{
            //     return todo.done !== false
            // });
            // return filter.length

            //reduce 条件统计
            return this.todos.reduce((pre, cur) => {
                //pre 上一次调用的返回值
                return pre + (cur.done ? 1 : 0)
            }, 0)
        },
        total() {
            return this.todos.length
        },
        isAll() {
            return this.doneTotal === this.total &&  this.total > 0
        }
    }
}
</script>
