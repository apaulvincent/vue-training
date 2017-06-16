<template>
  <div>
    <div v-for="(todo, i) in todos">
      <div :class="{'striked' : todo.done}">
        <span @click="toggleTodo(todo)" v-if="!isEditing[i]">{{todo.text}}</span>
        <input type="text" v-if="isEditing[i]" v-model="todo.text" />
        <button @click="editTodo(todo)">{{ !isEditing[i] ? 'Edit' : 'Done' }}</button>
        <button @click="deleteTodo(todo)" v-if="!isEditing[i]">X</button>
      </div>
    </div>

    <div>
      <br>
      <input type="text" v-model="newTodo"/>
      <button @click="addTodo">Add</button>  
    </div>
  </div>
</template>

<script>

export default {
  props: ['todos'],
  data () {
    return {
      newTodo: '',
      isEditing: []
    }
  },
  methods: {
    toggleTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos[todoIndex].done = !this.todos[todoIndex].done 
    },
    addTodo () {
      if(this.newTodo !== '') {
        this.todos.push({text: this.newTodo, done: false})
        this.newTodo = ''
      }
    },
    deleteTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.todos.splice(todoIndex, 1)
    },
    editTodo (todo) {
      const todoIndex = this.todos.indexOf(todo)
      this.isEditing.splice(todoIndex, 1, !this.isEditing[todoIndex])
    }
  },
  mounted () {
    this.isEditing = this.todos.map(t => false)
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.striked span{
  text-decoration: line-through;
}
</style>
