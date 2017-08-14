<template>
  <div class="todobox">
      <input 
          @keyup.enter="$store.dispatch('addTodo')" 
          type="text" 
          v-model="task" 
          placeholder="Create a task and hit ENTER">
  </div>
</template>

<script>
  export default {
    computed: {
      task: {
        get() {
          return this.$store.state.task;
        },
        set(value) {
          this.$store.commit('UPDATE_TASK', value);
        }
      }
    }
  }
</script>

<style>
  .todobox {
    display: flex;
    justify-content: space-between;
    padding: 1em;
    margin: 10px 0;
  }
  .todobox h3 {
    color: #000;
    font-size: 1.2em;
    text-align: left;
  }
  .todobox input {
      flex: 0 100%;
      height: 40px;
      padding: 5px;
      border-radius: 5px;
      border: 1px solid #00A2DF;
      font-size: 1.2em;
  }
  .todobox button {
      flex: 0 18%;
      padding: 5px 10px;
      background-color: #00A2DF;
      color: #FFF;
      border-radius: 5px;
      border: none;
      outline: none;
}
</style>