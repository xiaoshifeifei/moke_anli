/*
 * @Description: 
 * @Date: 2019-10-08 22:27:09
 * @LastEditors: 自己洗小红花
 * @LastEditTime: 2020-03-05 10:34:31
 */



//  mock要再创一个文件夹引入
//  import axios from 'axios'

// // post
// export function postAction(url, parameter) {
//   return axios({
//     url: url,
//     method: 'post',
//     data: parameter
//   })
// }
// export function aData(url, parameter) {
//   return axios({
//     url: url,
//     method: 'post',
//     data: parameter
//   })
// }

// vue组件使用
// postAction('/login', {}).then((res) => { 
//     console.log('jieguo', res)
//  })

import Mock from 'mockjs'
const Random = Mock.Random
export const POST = {

  //  登陆
  '/login': (req, res) => {
    let body = JSON.parse(req.body)
    return {
      "success": true,
      "message": "登录成功",
      "code": 200,
      "result": {
        "multi_depart": 0,
        "userInfo": {
          "id": "a75d45a015c44384a04449ee80dc3503",
          "username": "jeecg",
          "realname": "jeecg测试",
          "avatar": "user/20190220/e1fe9925bc315c60addea1b98eb1cb1349547719_1550656892940.jpg",
          "birthday": null,
          "sex": 2,
          "email": "418799587@qq.com",
          "phone": "",
          "orgCode": "A01A04",
          "status": 1,
          "delFlag": "0",
          "workNo": "A002",
          "post": "002",
          "telephone": null,
          "createBy": "admin",
          "createTime": "2019-02-13 16:02:36",
          "updateBy": "admin",
          "updateTime": "2020-02-24 15:32:08",
          "activitiSync": "1",
          "identity": 1,
          "departIds": ""
        },
        "departs": [],
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODI3ODgyMzIsInVzZXJuYW1lIjoiamVlY2cifQ.egxCYNeOD-Dcl0u1tANDjz28kl8nFGXIc8sipSYtEAI"
      },
      "timestamp": 1582786432130
    }
  },
  '/MenuLi': (req, res) => {
    let body = JSON.parse(req.body)
    return {
      "success": true,
      "code": 200,
      "result": {
        "data": [{
              MenuID: 25,
              ParentID: 0,
              AuthName: "用户管理",
              Path: "Yhmanage",
              "children": [{
                MenuID: 26,
                ParentID: 25,
                AuthName: "用户列表",
                Path: "userlist"
              }, ]
            },
            {
              MenuID: 28,
              ParentID: 0,
              AuthName: "权限管理",
              Path: "qxmanage",
              "children": [{
                  MenuID: 32,
                  ParentID: 28,
                  AuthName: "角色列表",
                  Path: "Jslist"
                },
                {
                  MenuID: 33,
                  ParentID: 28,
                  AuthName: "权限列表",
                  Path: "Qxlist"
                }
              ]
            },
            {
              MenuID: 29,
              ParentID: 0,
              AuthName: "商品管理",
              Path: "Spmanage",
              "children": [{
                  MenuID: 34,
                  ParentID: 29,
                  AuthName: "商品列表",
                  Path: "Splist"
                },
                {
                  MenuID: 35,
                  ParentID: 29,
                  AuthName: "分类列表",
                  Path: "Classlist"
                },
                {
                  MenuID: 36,
                  ParentID: 29,
                  AuthName: "商品分类",
                  Path: "SpClass"
                }
              ]
            },
            {
              MenuID: 30,
              ParentID: 0,
              AuthName: "订单管理",
              Path: "Ddmanage"
            },
            {
              MenuID: 31,
              ParentID: 0,
              AuthName: "数据统计",
              Path: "Datatotl"
            },
            {
              MenuID: 38,
              ParentID: 0,
              AuthName: "菜单管理",
              Path: "Cdmanage",
              "children": [{
                  MenuID: 39,
                  ParentID: 38,
                  AuthName: "添加菜单",
                  Path: "addlist"
                },
                {
                  MenuID: 40,
                  ParentID: 38,
                  AuthName: "删除菜单",
                  Path: "deletelist"
                }
              ]
            }

          ]

          ,
        "departs": [],
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODI3ODgyMzIsInVzZXJuYW1lIjoiamVlY2cifQ.egxCYNeOD-Dcl0u1tANDjz28kl8nFGXIc8sipSYtEAI"
      },
      "timestamp": 1582786432130
    }
  },
  '/userLi': (req, res) => {
    let body = JSON.parse(req.body)
    return {
      "success": true,
      "code": 200,
      "result": {
        "data": {
          "total": 4,
          "current_page": 1,
          "total_page": 1,
          "row": [{
              "UserID": 4,
              "UserName": "林宥嘉",
              "Email": "982466646597@qq.com",
              "Tel": "13159005921",
              "IsOwner": 0,
              "UserStatus": 1
            }, {
              "Email": "867745411@qq.com",
              "IsOwner": 1,
              "Tel": "18060703873",
              "UserID": 13,
              "UserName": "林志林",
              "UserStatus": false
            }, {
              "Email": "10572863@qq.com",
              "IsOwner": 1,
              "Tel": "13088888866",
              "UserID": 13,
              "UserName": "俞灏明",
              "UserStatus": false
            },
            {
              "Email": "123456@qq.com",
              "IsOwner": 1,
              "Tel": "13021211351",
              "UserID": 13,
              "UserName": "陈坤",
              "UserStatus": false
            }
          ]
        },
        "departs": [],
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODI3ODgyMzIsInVzZXJuYW1lIjoiamVlY2cifQ.egxCYNeOD-Dcl0u1tANDjz28kl8nFGXIc8sipSYtEAI"
      },
      "timestamp": 1582786432130
    }
  },
  '/status': (req, res) => {
    let body = JSON.parse(req.body)
    return {
      "success": true,
      "code": 200,
      "msg": "更新用户状态成功",
      "result": {
        "data": {
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODI3ODgyMzIsInVzZXJuYW1lIjoiamVlY2cifQ.egxCYNeOD-Dcl0u1tANDjz28kl8nFGXIc8sipSYtEAI"
        },
        "timestamp": 1582786432130
      }
    }
  },
  '/addList': (req, res) => {
    let body = JSON.parse(req.body)
    return {
      "success": true,
      "code": 200,
      "msg": "添加用户状态成功",
      "result": {
        "data": {
          "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODI3ODgyMzIsInVzZXJuYW1lIjoiamVlY2cifQ.egxCYNeOD-Dcl0u1tANDjz28kl8nFGXIc8sipSYtEAI"
        },
        "timestamp": 1582786432130
      }
    }
  },
  '/qxList': (req, res) => {
    let body = JSON.parse(req.body)
    return {
      "success": true,
      "code": 200,
      "msg": "获取权限列表成功",
      "result": {
        "data": [{
            "id": 101,
            "authName": "商品管理",
            "level": "0",
            "pid": 0,
            "path": "goods"
          },
          {
            "id": 102,
            "authName": "订单管理",
            "level": "0",
            "pid": 0,
            "path": "order"
          },
          {
            "id": 103,
            "authName": "权限管理",
            "level": "0",
            "pid": 0,
            "path": "rights"
          },
          {
            "id": 104,
            "authName": "商品列表",
            "level": "1",
            "pid": 0,
            "path": "left"
          },
          {
            "id": 105,
            "authName": "添加商品",
            "level": "2",
            "pid": 0,
            "path": "addsuper"
          },
          {
            "id": 106,
            "authName": "订单列表",
            "level": "1",
            "pid": 0,
            "path": "Ddlist"
          },
          {
            "id": 107,
            "authName": "添加订单",
            "level": "2",
            "pid": 0,
            "path": "addang"
          }
        ],
        "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODI3ODgyMzIsInVzZXJuYW1lIjoiamVlY2cifQ.egxCYNeOD-Dcl0u1tANDjz28kl8nFGXIc8sipSYtEAI",
        "timestamp": 1582786432130
      }
    }
  },
  '/jsList': (req, res) => {
    let body = JSON.parse(req.body)
    return {
      "success": true,
      "code": 200,
      "msg": "获取角色列表成功",
      "data": [
        {
          "id": 30,
          "roleName": "主管",
          "roleDesc": "技术负责人",
          "children": [
            {
            "id": 101,
            "authName": "商品管理",
            "level": "0",
            "pid": 0,
            "path": "goods",
            "children": [
              {
              "id": 104,
              "authName": "商品列表",
              "level": "1",
              "pid": 0,
              "path": "left",
              "children": [
                {
                "id": 105,
                "authName": "添加商品",
                "level": "2",
                "pid": 0,
                "path": "addsuper"
              }, {
                "id": 108,
                "authName": "删除商品",
                "level": "2",
                "pid": 0,
                "path": "addsuper"
              }
            ]
            },{
              "id": 106,
              "authName": "商品分类",
              "level": "1",
              "pid": 0,
              "path": "left",
            },
            {
              "id": 107,
              "authName": "商品分仓",
              "level": "1",
              "pid": 0,
              "path": "left",
            }
          ]
          },
         
          {
            "id": 102,
            "authName": "业务管理",
            "level": "0",
            "pid": 0,
            "path": "goods",
            "children": [
              {
              "id": 104,
              "authName": "客户列表",
              "level": "1",
              "pid": 0,
              "path": "left",
              "children": [
                {
                "id": 105,
                "authName": "添加客户",
                "level": "2",
                "pid": 0,
                "path": "addsuper"
              }
            ]
            }
          ]
          }
        ]
        },
         // ********************2**********************
        {
          "id": 31,
          "roleName": "经理",
          "roleDesc": "业务负责人",
          "children": [
           
          {
            "id": 101,
            "authName": "商品管理",
            "level": "0",
            "pid": 0,
            "path": "goods",
            "children": [{
              "id": 104,
              "authName": "商品列表",
              "level": "1",
              "pid": 0,
              "path": "left",
              "children": [{
                "id": 105,
                "authName": "添加商品",
                "level": "2",
                "pid": 0,
                "path": "addsuper"
              }]
            }]
          },
          {
            "id": 102,
            "authName": "业务管理",
            "level": "0",
            "pid": 0,
            "path": "goods",
            "children": [{
              "id": 104,
              "authName": "客户列表",
              "level": "1",
              "pid": 0,
              "path": "left",
              "children": [{
                "id": 105,
                "authName": "添加客户",
                "level": "2",
                "pid": 0,
                "path": "addsuper"
              }]
            }]
          },
        ]
        },
      ],
      "token": "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJleHAiOjE1ODI3ODgyMzIsInVzZXJuYW1lIjoiamVlY2cifQ.egxCYNeOD-Dcl0u1tANDjz28kl8nFGXIc8sipSYtEAI",
      "timestamp": 1582786432130
    }
  }


}