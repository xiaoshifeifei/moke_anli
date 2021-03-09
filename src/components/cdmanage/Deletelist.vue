 <template>
  <div>
      <div>菜单ID:<input type="text" v-model="message.greade"></div>
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
         MenuID: this.message.greade,
    }
        const adduser = await this.$http.post('/menu/del',data)
        console.log("adduser",adduser)
      }
    }
  
}

</script>
<style scoped>
</style>