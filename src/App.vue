<template>
  <div id="app" class="container">
      <h1>Simple <span>VueJS</span> Todos</h1>
      <h3>using Vuex and mLab</h3>
      <input-box></input-box>
      <todo-tasks></todo-tasks>
      <todo-complete></todo-complete>
      <img class="loader" v-if="showLoader" src="/static/loader.gif">
  </div>
</template>

<script>
import InputBox from './components/InputBox'
import TodoTasks from './components/TodoTasks'
import TodoComplete from './components/TodoComplete'

export default {
  name: 'app',
  computed: {
    showLoader() {
      return this.$store.state.showLoader;
    },
    refresh() {
      return this.$store.state.refresh;
    }
  },
  watch: {
      refresh(val) {
          if(val) {
             this.$store.dispatch('getTodos'); 
          }
      }
  },
  components: {
    InputBox, TodoTasks, TodoComplete
  },
  created() {
    this.$store.dispatch('getTodos');
  }
}
</script>

<style>
  @import url('https://fonts.googleapis.com/css?family=Lato');

  * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
  }

  body {
      font-family: 'Lato', sans-serif;
  }
  ul {
      list-style: none;
  }

  .container {
      width: 50%;
      margin: 40px auto;
      padding: 1em;
      border-radius: 5px;
      border: 1px solid #666;
      position: relative;
  }
  .container h1 {
      font-size: 1.6em;
      text-align: center;
      text-transform: uppercase;
  }
  .container h1 span {
      color: #00A2DF;
  }
  .container h3 {
      text-transform: uppercase;
      font-size: .9em;
      color: #F24709;
      text-align: center;
  }
  .container .loader {
      position: absolute;
      bottom: -80px;
      left: 50%;
      transform: translateX(-50%);
      width:60px;
      height: 60px;
  }
</style>
