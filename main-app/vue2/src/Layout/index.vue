<template>
  <div class="container">
    <div class="left-box">
      <ul v-for="(item,index) in childAppList" :key="index">
        <li @click="handleView(item.path)">{{item.label}}</li>
      </ul>
    </div>
    <div class="right-box">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      childAppList:[
        {
          label:'首页',
          path:'/'
        },
        {
          label:'vue2子应用',
          path:'/child-vue2'
        },
        {
          label:'vue3子应用',
          path:'/child-vue3'
        },
         {
          label:'react子应用',
          path:'/child-react'
        }
      ]
    }
  },
  methods:{
    handleView(path) {
      this.$router.push(path)
    }
  }
}
</script>

<style scoped>
.container .left-box {
  position: fixed;
  width: 240px;
  border-right: 1px solid #999;
  height: 100%;
  padding: 20px 0;
  text-align: center;
}

.container .left-box > ul > li {
  margin-bottom: 20px;
  cursor: pointer;
}

.container .right-box {
  padding: 20px;
  margin-left: 240px;
}
</style>
