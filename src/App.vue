<template>
  <SinglePost v-for="i in [0,1,2,3,4,5,6,7,8,9,10]" :key="i"></SinglePost>
</template>

<script>
import SinglePost from "./components/SinglePost.vue";

export default {
  name: "App",
  components: {
    SinglePost,
  },
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
