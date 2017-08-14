<template>
    <div class="todolist">
        <h3>Tasks: COMPLETED</h3>
        <ul v-if="completed.length > 0">
            <li class="todoitem" v-for="item in completed">
                <span class="strike">{{ item.task }}</span>
                <span class="fa fa-times delete" @click="$store.dispatch('deleteTodo', item._id)"></span>
            </li>
        </ul>
        <div v-else>No completed tasks yet</div>
    </div>
</template>

<script>
    export default {
        computed: {
            completed() {
                return this.$store.state.completed;
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