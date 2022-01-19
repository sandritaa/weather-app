<template>
  <!-- <h1>single post</h1> -->

  <div class="container">
    <img v-bind:src="postApi.img_src" alt="" />

    <h2>
      Rover status:
      {{ postApi.rover.status }}
      <br />
      Rover name: {{ postApi.rover.name }}
      <br />
      Earth Date: {{ postApi.earth_date }}
      <br />
      Rover launch date: {{ postApi.rover.launch_date }}
      <br />
      Rover landing date: {{ postApi.rover.landing_date }}
      <br />
      Camera: {{ postApi.camera.full_name }}
    </h2>

    <!-- <p>{{ like }}</p> -->
    <button
      v-if="like == true"
      style="background-color: green"
      @click="like = !like">like
    </button>
    <button v-else @click="like = !like">like</button>
  </div>
</template>

<script>
export default {
  data() {
    return {
      like: false,
    };
  },
  props: {
    postApi: {
      type: Object,
    },
  },
};
</script>

<style>
.container {
  position: center;
  background-color: rgb(219, 219, 219);
  width: 600px;
  border: 15px solid rgb(241, 241, 241);
  padding: 50px;
  margin: auto;
}

img {
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}

h2 {
  font-family: "Assistant", sans-serif;
}
</style>
