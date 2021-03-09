<template>
  <div>
    <!-- 面包屑导航 -->
    <el-breadcrumb separator-class="el-icon-arrow-right">
      <el-breadcrumb-item :to="{ path: '/home' }">首页</el-breadcrumb-item>
      <el-breadcrumb-item>权限管理</el-breadcrumb-item>
      <el-breadcrumb-item>角色列表</el-breadcrumb-item>
    </el-breadcrumb>
    <!-- 权限列表区域 -->
    <!-- prop=""数据源 -->
    <!-- 添加角色按钮 -->
    <el-card>
      <el-row>
        <el-col>
          <el-button type="primary"
                     class="lefts">添加角色</el-button>
        </el-col>
      </el-row>
      <!-- 角色列表区域 -->
      <el-table :data="jslist"
                border
                stripe>
        <!-- 扩展列 -->
        <el-table-column type="expand">
          <template slot-scope="scope">
            <el-row :class="['bdbuttom', indexa === 0 ? 'bdtop' :'', 'centers']" v-for="(item1,indexa) in scope.row.children" :key="item1.id" >
              <!-- 渲染一级权限 -->
              <el-col :span="5">
                <el-tag closable @close="closetag(scope.row,item1.id)"> {{item1.authName}}</el-tag>
                <i class="el-icon-caret-right"></i>
              </el-col>
              <!-- 渲染二三级权限 -->
              <el-col :span="19">
                <!-- 通过for循环渲染二级权限 -->
                    <el-row  :class="[indexb === 0? '':'bdtop']" v-for="(item2,indexb) in item1.children" :key="item2.id" >
                      <el-col :span="6">
                        <el-tag type="success"  closable @close="closetag(scope.row,item2.id)"> {{item2.authName}}</el-tag>
                        <i class="el-icon-caret-right"></i>
                      </el-col>
                      <el-col :span="18" >
                         <el-tag type="warning" v-for="(item3) in item2.children" :key="item3.id" closable @close="closetag(scope.row,item3.id)"> {{item3.authName}}</el-tag>
                      </el-col>
                  </el-row>
              </el-col>
            </el-row>
          </template>
        </el-table-column>
        <!-- 索引列 -->
        <el-table-column type="index"
                         label="#"></el-table-column>
        <el-table-column label="角色名称"
                         prop="roleName"></el-table-column>
        <el-table-column label="角色描述"
                         prop="roleDesc"></el-table-column>
        <el-table-column label="操作"
                         prop="level">
          <template slot-scope="scope">
            <!-- 修改按钮 -->
            <el-button type="primary"
                       icon="el-icon-edit"
                       size="mini"
                       @click="changeMes(scope.row)">编辑</el-button>
            <!-- 删除按钮 -->
            <!-- @click="deletes(scope.row)" -->
            <el-button type="danger"
                       icon="el-icon-delete"
                       size="mini">删除</el-button>
            <!-- 分配角色按钮 -->
            <!-- 鼠标滑过上边有文字 -->
            <el-tooltip effect="dark"
                        content="分配角色"
                        placement="top"
                        :enterabl="false">
              <el-button type="warning"
                         icon="el-icon-setting"
                         size="mini"
                         @click="showqx"
                         >分配权限</el-button>
            </el-tooltip>
          </template>
        </el-table-column>
      </el-table>
    </el-card>
<!-- 分配权限 -->
<el-dialog
  title="分配权限" :visible.sync="roleFp" width="50%">
  <el-tree :data="qxdata" :props="qxdataProps" @node-click="handleNodeClick"></el-tree>
  <span slot="footer" class="dialog-footer">
    <el-button @click="roleFp = false">取 消</el-button>
    <el-button type="primary" @click="roleFp = false">确 定</el-button>
  </span>
</el-dialog>
  </div>
</template>


<script>
import { jsList } from '../../api/manage'
export default {
  data() {
    return {
      jslist: [],
      // 控制对话框的显示与隐藏
      roleFp:false,
    // 所有权限数据
      qxdata:[],
      qxdataProps:{
          label:"authName",
          chilren:'chilren'
      }
    }
  },
  created() {
    this.getjslist()
  },
  methods: {
    getjslist() {
      jsList('/jsList').then((res) => {
        console.log('res111', res)
        this.jslist = res.data.data
      })
    },
    // tag删除,传入角色ID 和权限ID
   async closetag(jsid,qxid){
      const confirmResult =await this.$confirm('此操作将永久删除该文件, 是否继续?', '提示', {
          confirmButtonText: '确定',
          cancelButtonText: '取消',
          type: 'warning'
          }).catch(err =>err)
          if(confirmResult !== 'confirm'){
            return this.$message.info('取消了删除!')
          }
          console.log('确认了删除')
          //1\ 在这里发送删除接口请求,传入两个ID
          // 2\请求成功之后jsid.children  = res.data  防止删除完自动关闭
    },
             // 分配权限弹窗
    showqx(){
      this.roleFp=true;
      // 获取原有权限的数据
    },
    handleNodeClick(){

    }
  },
}
</script>

<style>


.el-main {
  text-align: left;
}
.el-tag{
  margin: 7px;
}
.bdtop{
  border-top:1px solid #eee;
}
.bdbuttom{
   border-bottom:1px solid #eee;
}
.centers{
  display: flex;
  align-items: center;
}
</style>