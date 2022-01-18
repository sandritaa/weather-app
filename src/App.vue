<template>
  <div v-if="loading == false">
    <SinglePost
      v-for="singlePost in apiData"
      :key="singlePost"
      :postApi="singlePost"
    ></SinglePost>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import SinglePost from "./components/SinglePost.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    SinglePost,
  },
 
  data() {
    return {
      loading: true,
      apiData: {},
    };
  },
  created() {
    // Let's assume the api is loading
    this.loading = true;

    // Call the API on page load (mounted()) - this is a Promise
    let myPromise = axios.get(
      "https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=S7Xq2VPauHACIBBCLRGPgcegyt5KPmIKH2pmXYfh"
    );

    // When the Promise is fulfilled, store the data in a object that can be used outside the function (apiData)
    myPromise.then((response) => {
      this.apiData = response.data.photos;
      this.loading = false;
    });
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
