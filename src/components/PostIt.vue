<template>
  <div class="postit">
    <h1>{{ title }}</h1>
    <ul>
      <li v-for="c in content" :key="c">{{ c }}</li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'PostIt',
  props: {
    title: String,
    content: []
  },
  methods: {
    JeSuisUneMethode() {
      console.log("J'affiche un message")
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.postit {
  background-color: rgba(11, 11, 11, 0.6);
  width: 50%;
  justify-content: center;
  margin: 1rem;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
  color: #fff
}
h1 {
  color: #fff;
}
</style>
