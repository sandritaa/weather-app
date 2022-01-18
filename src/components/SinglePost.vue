<template>
  <!-- <h1>single post</h1> -->

  <div class="container">
    
    <img v-bind:src="postApi.img_src" alt="" />
  
    <h2>
    
      Rover name: {{ postApi.rover.name }} 
      <br>
      Rover landing date:{{ postApi.rover.landing_date }} 
      <br>
      Rover launch date:
      {{ postApi.rover.launch_date }} 
      <br>
      Rover status:
      {{ postApi.rover.status }} 
      <br>
      Camera: {{ postApi.camera.full_name }}
    </h2>
    <h3>Earth Date: {{ postApi.earth_date }}</h3>

    <!-- <p>{{ like }}</p> -->
    <button v-if="like == true" style="background-color:green" @click="like=!like">unlike</button>
    <button v-else  @click="like = !like">like</button>

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
.container
 {
     position: center;
  background-color: lightgrey;
  width: 600px;
  border: 15px solid green;
  padding: 50px;
  margin: auto;
    box-shadow: 1px 1px #888888;

  /* box-sizing: border-box; */
  /* border: 0.5px solid #ffffff;
  padding: 5px;
  box-shadow: 1px 1px #888888; */
 
  /* height: 100px; */
  }

img {
  max-width: inherit;
  max-height: inherit;
  height: inherit;
  width: inherit;
  object-fit: cover;
}

  
</style>
