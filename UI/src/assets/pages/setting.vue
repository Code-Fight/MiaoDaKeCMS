<template>

    <el-form :model="formAlignRight" label-width="80px">
  <el-form-item label="测试">
    <el-input v-model="formAlignRight.name"></el-input>
  </el-form-item>
  <el-form-item label="测试">
    <el-input v-model="formAlignRight.region"></el-input>
  </el-form-item>
  <el-form-item label="测试">
    <el-input v-model="formAlignRight.type"></el-input>
  </el-form-item>
</el-form>

</template><script>
  export default {
    data() {
      return {
        formAlignRight: {
          name: '',
          region: '',
          type: ''
        }
      };
    }
  }
</script>