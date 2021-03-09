<template>
  <!-- 面包屑导航 -->
  <div>
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>用户管理</el-breadcrumb-item>
      <el-breadcrumb-item>用户列表</el-breadcrumb-item>
    </el-breadcrumb>

    <!-- 卡片视图区域 -->
    <el-card>
      <!-- 搜索与添加区域 -->

      <el-row :gutter="20">
        <el-col :span="8">

          <!-- @clear="getUserlist" 下 -->
          <el-input placeholder="请输入内容"
                    v-model="queryinfo.query"
                    clearable
                    @clear="getUserlist">

            <el-button slot="append"
                       icon="el-icon-search"
                       @click="getUserlist"></el-button>
          </el-input>
        </el-col>
        <el-col :span="4">
          <el-button type="primary"
                     @click="adduser">添加用户</el-button>
        </el-col>
      </el-row>

      <!-- 用户列表区域 -->
      <!-- prop=""数据源 -->
      <el-table :data="userlist"
                border
                stripe>
        <el-table-column type="index"></el-table-column>
        <el-table-column label="姓名"
                         prop="UserName"></el-table-column>
        <el-table-column label="邮箱"
                         prop="Email"></el-table-column>
        <el-table-column label="电话"
                         prop="Tel"></el-table-column>
        <el-table-column label="角色"
                         prop="IsOwner"></el-table-column>
        <el-table-column label="状态">
          <!-- prop="message"   下面这个是状态的开关 -->
          <template slot-scope="scope">
            <el-switch v-model="scope.row.UserStatus"
                       @change="userStateChange(scope.row)"></el-switch>
          </template>
        </el-table-column>
        <el-table-column label="操作" width="180px">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary"
                       icon="el-icon-edit"
                       size="mini"
                       @click="changeMes(scope.row)"
                       ></el-button>
            <!-- 删除按钮 -->

            <!-- @click="deletes(scope.row)" -->
            <el-button type="danger"
                       icon="el-icon-delete"
                       size="mini"
                       
                       ></el-button>
            <!-- 分配角色按钮 -->
            <!-- 鼠标滑过上边有文字 -->
            <el-tooltip effect="dark"
                        content="分配角色"
                        placement="top"
                        :enterabl="false">
              <el-button type="warning"
                         icon="el-icon-setting"
                         size="mini"></el-button>
            </el-tooltip>

            <!-- <el-switch ></el-switch> -->
          </template>
        </el-table-column>
      </el-table>
      <!-- 分页区域 -->
      <el-pagination @size-change="handleSizeChange"
                     @current-change="handleCurrentChange"
                     :current-page="queryinfo.pagenum"
                     :page-size="queryinfo.pagesize"
                     :page-sizes="[1, 2, 5, 10]"
                     layout="total, sizes, prev, pager, next, jumper"
                     :total="totle">
      </el-pagination>
    </el-card>

    <!-- 添加用户的对话框 -->
    <el-dialog title="提示"
               :visible.sync="dialogVisible"
               width="50%">
      <!-- :before-close="handleClose"> -->
      <!-- 内容主体区域 -->
  <el-form :model="addform" :rules="addFormRules" ref="addFormRef" label-width="70px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username">
    <el-input v-model="addform.username"></el-input>
  </el-form-item>
   <el-form-item label="邮箱" prop="email">
    <el-input v-model="addform.email"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="password">
    <el-input v-model="addform.password"></el-input>
  </el-form-item>
</el-form>

      <!-- 底部区域 -->
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogVisible = false">取 消</el-button>
        <el-button type="primary"
                   @click="addUser">确 定</el-button>
      </span>
    </el-dialog>

    <!-- 修改用户 -->
    <el-dialog title="提示"
               :visible.sync="dialogView"
               width="50%">
      <!-- :before-close="handleClose"> -->
      <!-- 内容主体区域 -->
  <el-form :model="dialogVie" :rules="dialogVieRules" ref="dialogVieRef" label-width="70px" class="demo-ruleForm">
  <el-form-item label="用户名" prop="username" >
    <el-input v-model="dialogVie.username"  disabled></el-input>
  </el-form-item>
   <el-form-item label="邮箱" prop="email">
    <el-input v-model="dialogVie.email"></el-input>
  </el-form-item>
   <el-form-item label="密码" prop="password">
    <el-input v-model="dialogVie.password"></el-input>
  </el-form-item>
</el-form>

      <!-- 底部区域 -->
      <span slot="footer"
            class="dialog-footer">
        <el-button @click="dialogoff">取 消</el-button>
        <el-button type="primary"
                   @click="changeyh">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
import { userLi } from '../../api/manage'
import { status } from '../../api/manage'

export default {
  data() {
    return {
      UserStatus: '',
      queryinfo: {
        query: '',
        // 当前页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 2,
      },
      userlist: [],
      // 数据总条数
      totle: 0,
      // 控制对话框的显示与隐藏
      dialogVisible: false,
      dialogView:false,
      // 添加用户的表单数据
      addform:{
        username: '',
        email:'',
        password:'',
        
      },
       dialogVie:{
        username: '',
        email:'',
        password:'',
       },
      addFormRules:{
        username:[
           { required: true, message: '请输入用户名', trigger: 'blur' },
           { min: 3, max: 18, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        email:[
           { required: true, message: '请输入邮箱', trigger: 'blur' },
           { min: 3, max: 18, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password:[
           { required: true, message: '请输入邮箱', trigger: 'blur' },
           { min: 3, max: 18, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      },
       dialogVieRules:{
        email:[
           { required: true, message: '请输入邮箱', trigger: 'blur' },
           { min: 3, max: 18, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ],
        password:[
           { required: true, message: '请输入邮箱', trigger: 'blur' },
           { min: 3, max: 18, message: '长度在 3 到 10 个字符', trigger: 'blur' }
        ]
      },
    }
  },
  created() {
    this.getUserlist()
  },
  
  methods: {
    async getUserlist() {
    const params ={
        query: '',
        // 当前页数
        pagenum: 1,
        // 当前每页显示多少条数据
        pagesize: 2,
     } 
    userLi('/userLi',params).then((res)=>{
      if (res.status !== 200) {
        return this.$message.error('获取用户列表失败')
      }
      this.userlist = res.data.result.data.row;
      this.totle = res.data.result.data.total
    })
    },
        // 监听页码值改变事件
    handleCurrentChange(page) {
      this.queryinfo.pagenum =page;
      this.getUserlist()
    },
    // 监听pagesize改变的事件
    handleSizeChange(newSize) {
      this.queryinfo.pagesize =newSize;
      this.getUserlist()
    },
// ***********************-------------------
    // 监听swich状态改变
    async userStateChange(userinfo) {
      const params = {
        UserID: userinfo.UserID,
        UserStatus: userinfo.UserStatus,
      } 
      status("/status",params).then((res) => {       //发送请求// 线上请求状态改变      const { data: res } = await this.$http.post( '/user/status',params )
        console.log(res)
      if (res.status !== 200) {
        return this.$message.error('更新用户状态失败！')
      }
      this.$message.success('更新用户状态成功！')

        })
    },
    // 添加用户**********************************
    adduser() {
      this.dialogVisible = !this.dialogVisible
    },
  // 添加用户点击确定*****************************
  addUser(){
    const addUserDa= {
      UserName:this.addform.username,
      Email:this.addform.email,
      UserPassword:this.addform.password
    }
    this.$refs.addFormRef.validate(async valid =>{
      if(!valid) return
      addList('/addList').then((res)=>{
         if(res.status !==200 ){
       this.$message.error('添加用户失败')
     }
     this.$message.success('添加用户成功')
    //  关闭对话框
     this.dialogVisible=false,
    //  重新获取用户列表
     this.getUserlist();
      })
    })
  },
    // 修改用户信息
    changeMes(userid){
      this.dialogView = !this.dadialogView
      this.dialogVie.username = userid.UserName
      this.dialogVie.email = userid.Email
      this.dialogVie.password = userid.Tel
    },
    changeyh(){
      const params={
        Emile:this.dialogVie.username,
        password:this.dialogVie.password,
        
      }
      // 预验证弹窗
       this.$refs.dialogVieRef.validate( valid =>{
        if(!valid) return
          this.dialogView = false
       })
      //  this.dialogView = this.dadialogView
    },
    // 点击取消重置修改的
    dialogoff(){
      this.$refs.dialogVieRef.resetFields();
      this.dialogView = this.dadialogView
    }
  }
}
</script>

<style>
.el-main {
  line-height: 0px;
}
</style>