<template>
  <!-- If the api is not loading, then loop through the number of
  elements in the array returned by the API and generate a SinglePost components instance
  for each element.
  For each instance, an individual element of the API array is passed to the SinglePost as a prop -->
  <div v-if="loading == false">
    <SinglePost
      v-for="singlePost in apiData"
      :key="singlePost"
      :postApi="singlePost"
    ></SinglePost>
  </div>
  <!-- If the API is loading, display this to the user -->
  <div v-else>Loading...</div>
</template>

<script>
// Import our custom component SinglePost and axios which we use for getting the API
import SinglePost from "./components/SinglePost.vue";
import axios from "axios";

export default {
  name: "App",
  components: {
    SinglePost,
  },
  // Define the loading boolean to hold the value of the loading state
  // and define the object which will contain the API returned data
  data() {
    return {
      loading: true,
      apiData: {},
    };
  },
  created() {
    // Set the loading flag as true
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
