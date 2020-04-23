(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-69a60d18"],{"0f71":function(n,e,t){n.exports=t.p+"static/img/user.1909a885.png"},"12ce":function(n,e,t){"use strict";var i=t("a85c"),a=t.n(i);a.a},"28c4":function(n,e,t){e=n.exports=t("24fb")(!0),e.push([n.i,".background[data-v-71c89670]{background-color:#2d3a4b;background-size:100% 100%}.fontZT[data-v-71c89670]{color:#fff;font-size:25px}.el-form-item[data-v-71c89670]{border:1px solid hsla(0,0%,100%,.1);background:rgba(0,0,0,.1);border-radius:5px;color:#fff}.boxCenter[data-v-71c89670]{position:relative;width:450px;max-width:100%;padding:190px 35px 0;margin:0 auto;overflow:hidden}.floatUser[data-v-71c89670]{margin-top:12px}.floatCipher[data-v-71c89670],.floatUser[data-v-71c89670]{width:15px;height:15px;float:left;position:fixed;z-index:999;margin-left:8px}.floatCipher[data-v-71c89670]{margin-top:31px}.suck-in-enter[data-v-71c89670]{opacity:0;transform:scale(0)}.suck-in-enter-active[data-v-71c89670],.suck-in-leave-active[data-v-71c89670]{transition:all .3s}.suck-in-leave-active[data-v-71c89670]{opacity:0;transform:scale(0)}","",{version:3,sources:["H:/WORKWORK_TEST/vue-elementui-admin-sample/src/views/src/views/Login.vue"],names:[],mappings:"AAmEA,6BACA,wBAAA,CACA,yBACA,CAEA,yBACA,UAAA,CACA,cACA,CAEA,+BACA,mCAAA,CACA,yBAAA,CACA,iBAAA,CACA,UACA,CAEA,4BACA,iBAAA,CACA,WAAA,CACA,cAAA,CACA,oBAAA,CACA,aAAA,CACA,eACA,CAEA,4BAMA,eAEA,CAEA,0DATA,UAAA,CACA,WAAA,CACA,UAAA,CACA,cAAA,CACA,WAAA,CAEA,eAWA,CARA,8BAMA,eAEA,CAGA,gCACA,SAAA,CACA,kBACA,CAMA,8EACA,kBACA,CAEA,uCACA,SAAA,CACA,kBACA",file:"Login.vue?vue&type=style&index=0&id=71c89670&scoped=true&lang=css&",sourcesContent:['<template>\n  <div style="position: absolute;height: 100%;width: 100%;z-index:2000 " class="background">\n    <div class="boxCenter">\n      <p class="fontZT">系统登录</p>\n      <div :model="form" label-width="80px" style="margin-top: 30px;" class="input">\n        <el-input v-model="form.username" placeholder="用户名"\n                  prefix-icon="Img.User"/>\n        <el-input type="password" v-model="form.password" auto-complete="off"\n                  @keyup.enter.native="submitForm" placeholder="密码"\n                  :prefix-icon="Img.Cipher"\n                  style="margin-top: 20px;"/>\n        <el-checkbox v-model="form.isLongLogin" label="7天自动登录" style="color: white;float:right"/>\n        <el-button type="primary" @click="submitForm" style="width: 100%;margin-top: 20px;">登 录\n        </el-button>\n      </div>\n    </div>\n  </div>\n</template>\n\n<script>\n  import Img from \'src/assets/img\';\n  import LoginApi from \'src/api/login-api\';\n  import { setLoginInfo, setToken } from \'src/utils/cookies\';\n\n  export default {\n    name: \'Login\',\n    data() {\n      return {\n        Img,\n        form: {\n          username: \'\',\n          password: \'\',\n          isLongLogin: false,\n        },\n      };\n    },\n    methods: {\n      submitForm() {\n        if (this.form.username.trim() === \'\') {\n          this.$message({\n            message: \'请输入用户名。\',\n            type: \'warning\',\n          });\n        } else if (this.form.password.trim() === \'\') {\n          this.$message({\n            message: \'请输入密码。\',\n            type: \'warning\',\n          });\n        } else {\n          LoginApi.setLogin(this.form)\n            .then(({ data: { data, result, msg }, headers }) => {\n              if (result) {\n                setToken(headers.authorization,this.form.isLongLogin);\n                setLoginInfo(JSON.stringify(data));\n                this.$message.success(\'登录成功\');\n                this.$router.replace(\'/home\');\n              } else {\n                this.$message.error(msg);\n              }\n            });\n        }\n      },\n    },\n  };\n<\/script>\n\n<style scoped>\n  .background {\n    background-color: #2d3a4b;\n    background-size: 100% 100%;\n  }\n\n  .fontZT {\n    color: white;\n    font-size: 25px;\n  }\n\n  .el-form-item {\n    border: 1px solid hsla(0, 0%, 100%, .1);\n    background: rgba(0, 0, 0, .1);\n    border-radius: 5px;\n    color: #ffffff;\n  }\n\n  .boxCenter {\n    position: relative;\n    width: 450px;\n    max-width: 100%;\n    padding: 190px 35px 0;\n    margin: 0 auto;\n    overflow: hidden;\n  }\n\n  .floatUser {\n    width: 15px;\n    height: 15px;\n    float: left;\n    position: fixed;\n    z-index: 999;\n    margin-top: 12px;\n    margin-left: 8px;\n  }\n\n  .floatCipher {\n    width: 15px;\n    height: 15px;\n    float: left;\n    position: fixed;\n    z-index: 999;\n    margin-top: 31px;\n    margin-left: 8px;\n  }\n\n  /*切换效果fade-xxx*/\n  .suck-in-enter {\n    opacity: 0;\n    transform: scale(0, 0);\n  }\n\n  .suck-in-enter-active {\n    transition: all .3s;\n  }\n\n  .suck-in-leave-active {\n    transition: all .3s;\n  }\n\n  .suck-in-leave-active {\n    opacity: 0;\n    transform: scale(0, 0);\n  }\n</style>\n']}])},"470f":function(n,e,t){n.exports=t.p+"static/img/cipher.a2ce2612.png"},"7f59":function(n,e,t){n.exports=t.p+"static/img/userAvatar.f4734cdb.png"},a55b:function(n,e,t){"use strict";t.r(e);var i=function(){var n=this,e=n.$createElement,t=n._self._c||e;return t("div",{staticClass:"background",staticStyle:{position:"absolute",height:"100%",width:"100%","z-index":"2000"}},[t("div",{staticClass:"boxCenter"},[t("p",{staticClass:"fontZT"},[n._v("系统登录")]),t("div",{staticClass:"input",staticStyle:{"margin-top":"30px"},attrs:{model:n.form,"label-width":"80px"}},[t("el-input",{attrs:{placeholder:"用户名","prefix-icon":"Img.User"},model:{value:n.form.username,callback:function(e){n.$set(n.form,"username",e)},expression:"form.username"}}),t("el-input",{staticStyle:{"margin-top":"20px"},attrs:{type:"password","auto-complete":"off",placeholder:"密码","prefix-icon":n.Img.Cipher},nativeOn:{keyup:function(e){return!e.type.indexOf("key")&&n._k(e.keyCode,"enter",13,e.key,"Enter")?null:n.submitForm(e)}},model:{value:n.form.password,callback:function(e){n.$set(n.form,"password",e)},expression:"form.password"}}),t("el-checkbox",{staticStyle:{color:"white",float:"right"},attrs:{label:"7天自动登录"},model:{value:n.form.isLongLogin,callback:function(e){n.$set(n.form,"isLongLogin",e)},expression:"form.isLongLogin"}}),t("el-button",{staticStyle:{width:"100%","margin-top":"20px"},attrs:{type:"primary"},on:{click:n.submitForm}},[n._v("登 录\n      ")])],1)])])},a=[],o=(t("a481"),t("d1bb")),s=t("b775"),r={setLogin:function(n){return Object(s["a"])({method:"post",url:"/login",data:n})}},c=t("6a1d"),l={name:"Login",data:function(){return{Img:o["a"],form:{username:"",password:"",isLongLogin:!1}}},methods:{submitForm:function(){var n=this;""===this.form.username.trim()?this.$message({message:"请输入用户名。",type:"warning"}):""===this.form.password.trim()?this.$message({message:"请输入密码。",type:"warning"}):r.setLogin(this.form).then((function(e){var t=e.data,i=t.data,a=t.result,o=t.msg,s=e.headers;a?(Object(c["f"])(s.authorization,n.form.isLongLogin),Object(c["e"])(JSON.stringify(i)),n.$message.success("登录成功"),n.$router.replace("/home")):n.$message.error(o)}))}}},A=l,p=(t("12ce"),t("2877")),m=Object(p["a"])(A,i,a,!1,null,"71c89670",null);e["default"]=m.exports},a85c:function(n,e,t){var i=t("28c4");"string"===typeof i&&(i=[[n.i,i,""]]),i.locals&&(n.exports=i.locals);var a=t("499e").default;a("6164e49e",i,!0,{sourceMap:!0,shadowMode:!1})},d1bb:function(n,e,t){"use strict";var i=t("0f71"),a=t.n(i),o=t("7f59"),s=t.n(o),r=t("470f"),c=t.n(r);e["a"]={User:a.a,UserAvatar:s.a,Cipher:c.a}}}]);