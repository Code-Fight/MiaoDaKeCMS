<template>
  <div>
    <i class='fa fa-align-justify icon-large' id='toggle'></i>
    <ul id='dock'>
      <li class="launcher" v-bind:class="{active:indexA}" v-on:click="greet">
        <i class="fa fa-desktop"></i>
        <router-link to="/index">首页</router-link>
        <!--<a href="#">首页1</a>-->
      </li>


      <li class='launcher' v-bind:class="{active:linkA}" v-on:click="greet">
        <i class="fa fa-retweet"></i>
        <router-link to="/link">链接转换</router-link>
      </li>

      <li class='launcher' v-bind:class="{active:settingA}" v-on:click="greet">
        <i class="fa fa-cog"></i>
        <router-link to="/setting">软件设置</router-link>
      </li>


    </ul>
    <div id='beaker'>
      <img :src="img_per" />
    </div>
  </div>
</template>
<script>
// require("./javascripts/jquery.js")
// jQuery(function(){ 
//      $("#dock>li").each(function(index,ele){$(ele).on("click",menuclick)});
// })
// var menuclick= function (obj)
// {
//     $("#dock>li").each(function(index,ele){$(ele).attr('class','launcher')});
//     $(this).attr('class','active launcher')
// }

  // var _lis=document.getElementsByTagName("li");
  // console.log(document.getElementsByTagName("li").length)
  // for(var x in _lis)
  // {
    
  //   //console.log(_lis)
  //   //  _lis[x].className="launcher";
  // }
var data_1={
      indexA:true,
      linkA:false,
      settingA:false,
      img_per:require('../images/person.png')
    }
 export default{
    //let indexA
    
    data:function()
    {
        return data_1
    },
    methods: {
    greet: function (event) {
      console.log(event.srcElement.hash.replace(/#/,''))
      switch(event.srcElement.hash.replace(/#/,'')){
        case '/index':
          data_1.indexA=true;
          data_1.linkA=false;
          data_1.settingA=false;
          
          break;
        case '/link':
           data_1.indexA=false;
           data_1.linkA=true;
           data_1.settingA=false;
          break;
        case '/setting':
           data_1.indexA=false;
           data_1.linkA=false;
           data_1.settingA=true;
          break;
      }
    }
  }
  }
</script>