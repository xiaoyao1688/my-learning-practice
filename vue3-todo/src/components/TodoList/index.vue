<template>
  <div>
      <todo-item 
        v-for="item of todoList"
        :key="item.id"
        :item="item"
        @removeTodo="removeTodo"
        @setStatus="setStatus"
        @setDoing="setDoing"
      />
  </div>
</template>

<script lang="ts">
import { IUseTodo, useTodo } from '@/hooks'
import { ITodo,TODO_STATUS } from '@/typings'
import { PropType,defineComponent } from 'vue'
import TodoItem from './Item.vue'

interface IStatusState {
  DOING: TODO_STATUS,
  FINISHED: TODO_STATUS,
  WILLDO: TODO_STATUS
}

export default defineComponent({
    name:'TodoList',
    props:{
        todoList: Array as PropType<ITodo[]>
    },
    components:{
        TodoItem
    },
    setup (props,{emit}) {
      const {
        removeTodo,
        setStatus,
        setDoing
      }:IUseTodo = useTodo()

      return {
        removeTodo,
        setStatus,
        setDoing
      }
    },
})
</script>

<style>

</style>