import Vue from 'vue';
import Vuex from 'vuex';
import axios from 'axios';

Vue.use(Vuex);

export const store = new Vuex.Store({

    state: {
        task: '',
        todos: [],
        tasks: [],
        completed: [],
        showLoader: false,
        refresh: false,
        apikey: 'h2VMFCcoOY6ZCbyp6I-w7Rh8lS2gj99W',
        url: 'https://api.mlab.com/api/1/databases/todos/collections/tasks'
    },
    mutations: {
        GET_TODOS(state) {
            let taskArray = state.todos;
            state.tasks = taskArray.filter(function(f) {
                return (f.complete === false);
            });
            state.completed = taskArray.filter(function(t) {
                return (t.complete === true);
            });
            state.showLoader = false;
        },
        UPDATE_TASK(state, task) {
            state.task = task;
        }
    },
    actions: {
        getTodos({state, commit}) {
            state.showLoader = true;
            return axios({
                url: state.url,
                method: 'get',
                params: {
                    apiKey: state.apikey
                }
            })
            .then(res => {
                state.todos = res.data;
                commit('GET_TODOS');
            })
            .catch(err => console.log(err));
        },
        addTodo({state, commit}) {
            state.showLoader = true;
            state.refresh = false;
            return axios({
                url: state.url,
                method: 'post',
                params: {
                    apiKey: state.apikey
                },
                data: {
                    task: state.task,
                    complete: false
                } 
            })
            .then(res => {
                state.refresh = true;
                state.task = '';
            })
            .catch(err => console.log(err));
        },
        completeTodo({state, commit}, id) {
            state.showLoader = true;
            state.refresh = false;
            return axios({
                url: state.url,
                method: 'put',
                params: {
                    apiKey: state.apikey,
                    q: {
                        _id: id
                    }
                },
                data: {
                    $set: {
                        complete: true
                    }
                }
            })
            .then(res => {
                state.refresh = true;
            });
        },
        deleteTodo({state, commit}, id) {
            state.showLoader = true;
            state.refresh = false;
            return axios({
                url: state.url + '/' + id.$oid,
                method: 'delete',
                params: {
                    apiKey: state.apikey
                }
            })
            .then(res => {
                state.refresh = true;
            })
            .catch(err => console.log(err));
        }
    }
});