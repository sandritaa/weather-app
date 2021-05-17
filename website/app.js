/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let city = document.getElementById('zip');
let baseKey = '278a4bb0ed3e1dc04317050dfdf8f145';


async function farmWaitTime(url, zipCode, key) {
    // We go and get the zip code that the user has inputted in the html 
    // Now we can call the weather map API by using the URL of the API, the zipcode of the city, the word &appid which is requried by the API, and the key which represents the credentials
    const temperatureInCity = await fetch(url+zipCode.value+'&appid='+key)
};

let ear = document.getElementById('generate')


ear.addEventListener("click", function(){
    farmWaitTime(baseURL, city, baseKey)
})


// Create a new date instance dynamically with JS
let d = new Date();
let date = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();



























// function printMyName() {
//     return "Tom"
// }

// let name  = printMyName(); // -> Tom


// async function printMyName() {
//     return "Tom"
// }

// printMyName().then(alert) // -> Tom




// function printMyName() {
//     Promise.resolve(console.log("Tom"))
// }
