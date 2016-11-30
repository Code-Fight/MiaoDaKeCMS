<template>

    <el-form ref="form" :model="form">
        <el-form-item>
            <el-button type="primary" @click="onStart">开启自动转换</el-button>
        </el-form-item>

        <el-input type="textarea" rows=20 placeholder="转换日志" v-model="formStacked.log"></el-input>

    </el-form>

</template>
<style>
    .t {
        height: 400px
    }
</style>
<script>
  export default {
    data() {
      return {
        formStacked: {
          log: ''
        }
      };
    },
    methods: {
      onStart() {
        //console.log(this.$data.formStacked.)
        this.formStacked.log+='开始了!'+'\n'
      }
    }
  }
</script>