 <template>
  <div>
      <div>MenuID 0为顶级:<input type="text" v-model="message.greade"></div>
      <div>菜单名：<input type="text" v-model="message.dan"></div>
      <div>路径:<input type="text" v-model="message.path"></div>
      <button @click="handleClick">提交</button>
  </div>
</template>

<script>
export default {
  data(){
    return{
        message:{
          greade: 1,
          dan:"",
          path:""
        }
    }
  },
  methods: {
     async handleClick() {
        let data ={
         ParentID: this.message.greade,
         AuthName:this.message.dan,
         Path: this.message.path 
    }
        const adduser = await this.$http.post('/menu/add',data)
        console.log("adduser",adduser)
      }
    }
  
}

</script>
<style scoped>
</style>