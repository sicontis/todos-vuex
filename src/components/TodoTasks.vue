<template>
    <div class="todolist">
        <h3>Tasks: TODO</h3>
        <ul v-if="tasks.length > 0">
            <li class="todoitem" v-for="item in tasks">
                <span>{{ item.task }}</span>
                <span class="fa fa-check complete" @click="$store.dispatch('completeTodo', item._id)"></span>
            </li>
        </ul>
        <div v-else>Add a task</div>
    </div>
</template>

<script>
    export default {
        computed: {
            tasks() {
                return this.$store.state.tasks;
            }
        }
    }
</script>

<style>
    .todolist {
        padding: 1em;
        margin: 10px 0;
    }   
    .todolist h3 {
        color: #000;
        font-size: 1.2em;
        text-align: left;
        margin-bottom: 10px;
    }
    .todolist img {
        height: 50px;
    }
    .todolist li {
        padding: 10px 5px;
        border-bottom: 1px dotted #00A2DF;
        font-size: 1.05em;
        display: flex;
        justify-content: space-between;
    }
    .todolist li span:last-child {
        cursor: pointer;
    }
    .complete {
        color: #2CCA31;
    }
    .delete {
        color: #E20A16;
    }
    .strike {
        text-decoration: line-through;
    }
</style> 