<template>
  <div>
    <h1>search</h1>
    <ul>
      <li v-for="item in $store.state.city.list" :key="item" v-text="item"></li>
    </ul>
  </div>
</template>

<script>
  import axios from 'axios'
  export default {
    data() {
      return {
        list: []
      }
    },
    mounted(){
      // this.search()
    },
   async asyncData() {
       const data = await axios.get('http://localhost:3000/city/list')
       return{
         list: data.data
       }
    },
    async fetch({store,params}) {
      const data = await axios.get('http://localhost:3000/city/list')
      store.commit('city/add',data.data)
    },
    layout: 'search'
  }
</script>

<style lang="scss" scoped>

</style>