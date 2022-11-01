<template>
  <div id="app" @click="click">
    <nav>
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
      <!-- <router-link to="/a">aaa</router-link> | -->
    </nav>
    <router-view />
  </div>
</template>




<script>

import { mapMutations } from 'vuex'
export default {
  data() {
    return {

    }
  },

  methods: {
    ...mapMutations(["TabswitchTrue"]),

    // 点击body判断循环子元素是否有inputbox  从而进行 tab的折叠收齐
    click(e) {
      let flag = e.path.some(dom => dom.id == "inputBox");
      if (!flag)this.TabswitchTrue(false)

    }
  },
}
</script>


<style lang="scss">
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;

    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
