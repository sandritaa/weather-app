/* Global Variables */
let baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip='
let city = document.getElementById('zip');
let baseKey = '278a4bb0ed3e1dc04317050dfdf8f145';


async function farmWaitTime(url, zipCode, key) {
    // We go and get the zip code that the user has inputted in the html 
    // Now we can call the weather map API by using the URL of the API, the zipcode of the city, the word &appid which is requried by the API, and the key which represents the credentials
    const temperatureInCity = await fetch(url+zipCode.value+'&appid='+key)// important to watch for the .value elemenet here. We would typically use it where we are assigning the valu in the top as document.getElementById ('zip').value but in this case we have to input it here because we can only use this "extension" using querySelector
   
    const temperature = await temperatureInCity.json(); // here we using .json to translate our JS response in this case (temperatureInCity) to get data. 
    return temperature //in this case we return this item within our function to have access to this variable outside. We will be using this in our postWaitTime funciton. It makes in available from a global scope perspective 
};


let ear = document.getElementById('generate')


ear.addEventListener("click", function(){
    let tura= farmWaitTime(baseURL, city, baseKey)////temprature variable 
}) 


// Create a new date instance dynamically with JS
let day = new Date();
let date = day.getMonth()+'.'+ day.getDate()+'.'+ day.getFullYear();




let mood = document.getElementById('feelings').value

debugger;
















a = 'Hello'
b = 'Tommaso'
c = a + b // -> HelloTommaso

const obj = {
    dia:
    temp:
    feels:
}


async function postWaitTime(dia, temp, feels ){

    const full = await req(dia, temp+ feels)
};

postWaitTime(day,tura, mood)


















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
