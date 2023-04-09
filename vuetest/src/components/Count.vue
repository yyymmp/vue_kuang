<template>
    <div>
        <h1>当前求和为: {{$store.state.sum}}</h1>
        <h1>当前求和为: {{sum}}</h1>
        <h1>当前求和方法十倍为: {{$store.getters.bigSum}}</h1>
        <h1>当前求和方法十倍为: {{bigSum}}</h1>
        <h1>我在{{$store.state.school}}学习{{$store.state.subject}}</h1>
        <h1>我在{{school}}学习{{$store.state.subject}}</h1>
        <h1>我在{{subject}}</h1>
        <label>
            <select v-model.number="n">
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
        </label>
        <button @click="inc(n)">+</button>
        <button @click="dec(n)">-</button>
        <button @click="odd">当前求和为奇数+</button>
        <button @click="waitInc">等一等再加</button>
    </div>
</template>

<script>
    import {mapState} from 'vuex'
    import {mapGetters} from 'vuex'
    import {mapActions} from 'vuex'
    import {mapMutations} from 'vuex'
    export default {
        name: "Count",
        data() {
            return {

                n: 1
            }
        },
        methods: {
            // inc() {
            //     //1 动作 2 参数
            //     this.$store.dispatch('jia',this.n)
            // },

            ...mapActions({
                inc:"jia"
            }),
            // dec() {
            //     //直接与mutations 不参与action    action可以写额外逻辑 若不需要则直接与mutations对话
            //     this.$store.commit('DEC',this.n)
            // },
            ...mapMutations({
                dec:'DEC'
            }),
            odd() {
                //1 动作 2 参数
                this.$store.dispatch('odd',this.n)
            },
            waitInc() {
                setTimeout(() => {
                    this.sum += this.n
                }, 500)
            },
        },
        computed:{
            ...mapState([
                'sum',
                'school',
                'subject',
            ]),
            ...mapGetters({
                bigSum:'bigSum'
            }),


        },
        mounted() {
            console.log("Count",this)
        }
    }
</script>

<style scoped>
    button {
        margin-left: 50px;
    }
</style>
