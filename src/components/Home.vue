<template>
  <el-container>
    <!-- 头部区域 -->
    <el-header>
      <div class="logo">
        <img class="loginimg"
             src="../assets/logo.png"
             alt="">
        <span class="bgtext">小客抖管理系统</span>
      </div>
      <el-button type="info"
                 @click="loginout">退出</el-button>
    </el-header>
    <!-- 页面主体区域 -->
    <el-container>
      <!-- 侧边栏 -->
      <el-aside :width="isCollapse ? '64px' : '200px'">
        <div class="toggle-button"
             @click="toggleCollapse()">|||</div>
        <!-- 侧边栏菜单区域 -->
        <el-menu background-color="#545c64"
                 text-color="#fff"
                 active-text-color="#409eff"
                 :router="true"
                 :collapse="isCollapse"
                 :collapse-transition="false"
                 :default-active="activefault"
                 >
          <!-- 一级菜单 -->
          <el-submenu :index="item.MenuID + '' "
                      v-for="item in menulist"
                      :key="item.MenuID">
            <!-- 一级菜单的模板区 -->
            <template slot="title">
              <!-- 图标 -->
              <i :class="iconsObj[item.MenuID]" class="rt"></i>
              <!-- 文本 -->
              <span>{{item.AuthName}}</span>
            </template>
            <!-- 二级菜单 -->
            <el-menu-item :index="'/'+itema.Path + '' "
                          v-for="(itema) in item.children"
                          :key="itema.MenuID"
                          @click="saveNav('/'+itema.Path)"
                          >
              <template slot="title">
                <!-- 图标 -->
                <i class="el-icon-menu zrt" ></i>
                <!-- 文本 -->
                <span>{{itema.AuthName}}</span>
              </template>
            </el-menu-item>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- 右边主体内容 -->
      <el-main>
        <!-- 路由占位符 -->
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { MenuList } from '../api/manage';
export default {
  name: 'Home',
  data() {
    return {
      isCollapse: false,
      //  左侧菜单数据
      menulist: [],
      // 图标
      iconsObj:{
        '25':'el-icon-user-solid',
        '28':'el-icon-s-help',
        '29':'el-icon-s-open',
        '30':'el-icon-s-comment',
        '31':'el-icon-s-data',
        '38':'el-icon-s-operation',
      },
      // 被激活的空地址
      activefault:""

    }
  },
  created() {
    // 真实的
    this.getMenuList(), 
     
    this.activefault = sessionStorage.getItem("activePath")
  },
  // 点击事件方法区
  methods: {
    loginout() {
      window.sessionStorage.clear()
      this.$router.push('/login')
    },
     getMenuList(){
      MenuList('/MenuLi').then((res) =>{
       this.menulist = res.data.result.data
     })
    },
        //  获取所有的菜单
      // async getMenuList() {
      // const { data: res } = await this.$http.get('/menu/list')
      // console.log(res)
       saveNav(activePath){
      window.sessionStorage.setItem("activePath",activePath)

    }
    },
    //  切换菜单的折叠与展开
    
   
    toggleCollapse() {
      this.isCollapse = !this.isCollapse
    },
    // 点击保存链接的激活状态
   
  }
  
</script>

<style>
.el-container.is-vertical {
  height: 100%;
}
.el-menu {
  border: none;
}
.el-header {
  background-color: #373d41;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-left: 0;
  color: #fff;
  font-size: 20px;
}
.logo {
  width: 220px;
  height: 45px;
  color: #fff;
  display: flex;
  align-items: center;
}
.loginimg {
  width: 20%;
  height: 100%;
}
.bgtext {
  color: #fff;
  margin-left: 15px;
}
.el-aside {
  background-color: #333744;
  color: #fff;
  text-align: center;
  line-height: 200px;
}

.el-main {
  background-color: #eaedf1;
  color: #333;
  text-align: center;
  line-height: 160px;
}

body > .el-container {
  margin-bottom: 40px;
}

.el-container:nth-child(5) .el-aside,
.el-container:nth-child(6) .el-aside {
  line-height: 260px;
}

.el-container:nth-child(7) .el-aside {
  line-height: 320px;
}
.toggle-button {
  background-color: #4a5064;
  font-size: 10px;
  line-height: 24px;
  color: #fff;
  letter-spacing: 0.2em;
  cursor: pointer;
}
.rt{
  margin-right: 10px;
}
.zrt{
  padding-left: 45px;
}
</style>