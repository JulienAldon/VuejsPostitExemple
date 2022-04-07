<template>
  <div v-for="post in this.$store.getters.getPostits" :key="post" class="container">
    <PostIt :title="post.title" :content="post.content"/>
  </div>
  <label for="title">Title</label>
  <input id="title" v-model="title"/>
  <label for="content">Content</label>
  <input id="content" v-model="content"/>
  <button @click="add">add</button>
</template>

<script>
import PostIt from './components/PostIt.vue'

export default {
  name: 'App',
  components: {
    PostIt
  },
  data() {
    return {
      title: "",
      content: []
    }
  },
  mounted() {
    this.$store.dispatch('initApp')
  },
  methods: {
    add() {
      const test = {title: this.title, content: ['1']}
      this.$store.dispatch('addPostIt', test)
    }
  }
}
</script>

<style>
.container {
  display: flex;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
