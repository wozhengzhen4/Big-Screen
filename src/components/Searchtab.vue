<template>
  <div id="inputBox">

    <div>{{Tabswitch}}</div>
    <el-input v-model="inputvalue" placeholder="请输入内容" @input="inputChange" clearable @clear="clear"></el-input>

    <transition name="el-zoom-in-top">
      <div v-show="Tabswitch" class="box el-zoom-in-top">
        <el-tabs v-model="activeName" type="card" @tab-click="handleClick">
          <el-tab-pane v-for="item in tablist" :key="item" :label="item" :name="item">
            {{item}}
            <div></div>
          </el-tab-pane>
        </el-tabs>

      </div>
    </transition>
  </div>

</template>

<script>

import { mapState, mapMutations } from 'vuex'
export default {
  data() {
    return {
      inputvalue: '',
      activeName: '用户管理',
      tablist: ["用户管理", "配置管理", "角色管理", "定时任务补偿", "测试1", "测试2", "测试3"]

    }
  },

  methods: {
    ...mapMutations(["TabswitchTrue"]),

    // 点击tab
    handleClick(tab, event) {

    },
    // value变化
    inputChange() {
      console.log(this.inputvalue);
      this.TabswitchTrue(true)
    },
    // 点击取消
    clear() {
      this.TabswitchTrue(false)
    },

  },

  computed: {
    ...mapState(["Tabswitch"]),//解构state    
  }
}
</script>

 <style scoped lang="scss">
.box {
  height: 500px;
  border: 1px solid red;
  //   overflow: hidden;
}
</style>


