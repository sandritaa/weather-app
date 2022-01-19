<template>
  <div class="container">
    <!-- Render the image passed as a prop from the root component -->
    <img v-bind:src="postApi.img_src" alt="" />

    <!-- Render the description and earth date passed as a prop from the root components -->
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

    <!-- Depending on the state of the flag like, display a black heart or a purple heart -->
    <button v-if="like == true" @click="like = !like">&#128156;</button>
    <button v-else @click="like = !like">&#128420;</button>
  </div>
</template>

<script>
export default {
  // Define a boolean to hold the value of the like state
  data() {
    return {
      like: false,
    };
  },
  // Define the type of prop which is being passed by the root components
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
button {
  background-color: transparent;
  border: none;
  font-size: 40px;
}
</style>
