# 组件 -> commit -> mutation -> state -> 视图变更 -> 响应式

1. 组件 -> dispatch -> action
2. dispatch => type(actionType) -> 某个action
3. action -> commit 调用 -> mutation
4. mutation -> change -> state
5. render方案：state -> 数据流 -> 视图

# 组件划分
    - TodoList
        1. todoInput -> 输入的组件
        2. todoList -> 列表组件
            - TodoItem -> 列表项
                1. 完成或未完成的选择 checkbox
                2. 删除该项          button
                3. 正在做的确认按钮   button

Vue 3.0 文档 https://v3.vuejs.org                