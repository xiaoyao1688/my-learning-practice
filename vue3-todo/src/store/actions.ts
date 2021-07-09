import { IState, ITodo } from "@/typings";
import { Commit } from "vuex";
import { SET_TODO, SET_TODO_LIST, REMOVE_TODO,SET_TODO_STATUS,SET_DOING_STATUS } from "./actionTypes";

interface ICxt {
    commit: Commit,
    state: IState
}

export default {
    [SET_TODO]({ commit, state}: ICxt, todo: ITodo): void {
        commit(SET_TODO, todo)
    },
    [SET_TODO_LIST]({ commit, state}: ICxt, todoList: ITodo[]): void {
        commit(SET_TODO_LIST, todoList)
    },
    [REMOVE_TODO]({ commit }:ICxt, id: number): void {
        commit(REMOVE_TODO, id)
    },
    [SET_TODO_STATUS]({ commit }:ICxt, id: number):void {
        commit(SET_TODO_STATUS,id)
    },
    [SET_DOING_STATUS]({ commit }:ICxt, id: number):void {
        commit(SET_DOING_STATUS, id)
    }
}