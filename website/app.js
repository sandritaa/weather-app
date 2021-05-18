/* Global Variables */
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='// Link is provided by API
const baseKey = '278a4bb0ed3e1dc04317050dfdf8f145';// Number key is provided by API

/* GET - Async Funtion*/

async function farmWaitTime(url, zipCode, key) { 

    const temperatureInCity = await fetch(url+zipCode+'&appid='+key); // here we use as arguments the three parts of information that we need. The word &appid is requried by the API. We use our own arguments here.

    const temperature = await temperatureInCity.json(); // here we are using .json to translate our JS response in this case (temperatureInCity) to get data. 
    return temperature //return this item within our function to have access to this variable outside of the function. This will be used the postWaitTime function. 
};

const generateListener = document.getElementById('generate')// Defining variable that will be used in event listener

generateListener.addEventListener("click", function(){ //Here we kick off our event listener
    const city = document.getElementById('zip').value; // Here we are pulling this information from our HTML, creating a variable where we will next the information and use it in the above function and event listener command.
    
    const tura = farmWaitTime(baseURL, city, baseKey)// Create variable to nest farmWaitTime info. Temprature variable only in app.js 
}) 

/*Create a new date instance dynamically with JS*/

let day = new Date();
let date = day.getMonth()+'.'+ day.getDate()+'.'+ day.getFullYear(); //name only in app.js


let mood = document.getElementById('feelings').value //name only in app.js

debugger;



async function postWaitTime(dia, temp, feels ) { //attribute names assigned in function


let heart = { //crate object using the key (name) assosnged in server.js and pair with values in that we created in our function attributes. 
    date: dia,
    temperature: temp,
    userMood: feel
}

await fetch ('/route136', { //our route name that we created on server.js 
    method: "POST",
    headers: {
        'Content-Type': 'application/json',
    },
    body: JSON.stringify(heart)//what the client side is sending to the server (this body extension can be pulled from server.js file)
})



























// js day (app.js name) = dia (function name ) = date (server name that we are promising our backend for storage )
// js tura (app.js name) = temp (function name) = temperature (server name that we are promising our backend for storage )
// js mood (app.js name) = feels (function name) = userMood (server name that we are promising our backend for storage )


};

// postWaitTime(date,tura, mood)

// function sum(a,b){
//     return a+b
// }

// function multiply(a,b){
//     return a*b
// }


// let addition = sum(2,3)

// let multiplication = multiply(4,5)
















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
