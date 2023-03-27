export const max =  {
    methods:{
        showCommon(){
            alert(this.commonAttr)
        }
    },
    mounted() {
        console.log("混合mounted")
    }
}