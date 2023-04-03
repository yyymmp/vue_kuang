<template>
    <div id="root">
        <div class="todo-container">
            <div class="todo-wrap">
                <MyHeader @addTodo="addTodo"></MyHeader>
                <MyList :todos="todos"  :deleteTodo="deleteTodo"></MyList>
                <MyFooter :todos="todos" :checkAllTodo="checkAllTodo" :clearAll="clearAll"></MyFooter>
            </div>
        </div>
    </div>
</template>

<script>
import MyFooter from "@/components/MyFooter";
import MyHeader from "@/components/MyHeader";
import MyList from "@/components/MyList";

export default {
    name: 'App',
    data() {
        return {
            todos: JSON.parse(localStorage.getItem("todos")) || []
        }
    },
    components: {
        MyFooter,
        MyHeader,
        MyList
    },
    methods: {
        /*
        数据在哪，对数据的操作就放在哪
         */

        addTodo(todo) {
            console.log(todo);
            this.todos.unshift(todo)
        },

        //勾选 取消勾选 但该操作在孙组件中，此时就需要逐层传递数据 先传给list 再传给item
        checkTodo(id) {
            this.todos.forEach((todo) => {
                if (todo.id === id) {
                    todo.done = !todo.done
                }
            })
        },

        //删除
        deleteTodo(id) {
            //filter不改变原数组 返回新数组
            let filter = this.todos.filter((todo) => {
                return todo.id !== id
            });
            this.todos = filter;
        },

        //全选/全不选
        checkAllTodo(done) {
            this.todos.forEach((todo) => {
                todo.done = done
            })
        },

        //清空已完成
        clearAll(){
            let filter = this.todos.filter((todo) => {
                return todo.done === false
            });
            this.todos = filter;
        }
    }
    ,watch:{
        //监控todos变化捕获 此监视仅仅监视对象数组是否发生变化 对象内部发生变法无法检测
        // todos(value){
        //     localStorage.setItem("todos",JSON.stringify(value))
        // }
        todos:{
            deep:true,
            handler(val){
                localStorage.setItem("todos",JSON.stringify(val))
            }
        }
    },
    mounted() {
        //绑定全局事件
        console.log("app 绑定checkTodo事件")
        this.$bus.$on("checkTodo",this.checkTodo)
    },
    beforeDestroy() {
        this.$bus.$off("checkTodo")
    }


}
</script>

<style>
/*base*/
body {
    background: #fff;
}

.btn {
    display: inline-block;
    padding: 4px 12px;
    margin-bottom: 0;
    font-size: 14px;
    line-height: 20px;
    text-align: center;
    vertical-align: middle;
    cursor: pointer;
    box-shadow: inset 0 1px 0 rgba(255, 255, 255, 0.2), 0 1px 2px rgba(0, 0, 0, 0.05);
    border-radius: 4px;
}

.btn-danger {
    color: #fff;
    background-color: #da4f49;
    border: 1px solid #bd362f;
}

.btn-danger:hover {
    color: #fff;
    background-color: #bd362f;
}

.btn:focus {
    outline: none;
}

.todo-container {
    width: 600px;
    margin: 0 auto;
}

.todo-container .todo-wrap {
    padding: 10px;
    border: 1px solid #ddd;
    border-radius: 5px;
}


</style>
