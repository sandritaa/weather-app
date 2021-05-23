//----------------------------------------------------------------------------
// Define functions 
//----------------------------------------------------------------------------

// GET from Server - Async function 
async function getFromServer() {
    const projectDataJSON = await fetch('http://localhost:3000/getroute'); 
    let projectData = await projectDataJSON.json();
    console.log('NEW DATA RECEIVED')
    console.log('Latest date received from server: ' + projectData.date)
    console.log('Latest temperature received from server: ' + projectData.temp)
    console.log('Latest mood received from server: ' + projectData.mood)
    return projectData
}

// POST to Server - Async Funtion
async function postToServer(dataFrontEnd, tempFrontEnd, moodFrontEnd) { 
    // Assemble object with correct names as defined in backend POST function
    let projectData = { 
        date: dataFrontEnd,
        temp: tempFrontEnd,
        mood: moodFrontEnd
    }
    
    await fetch ('http://localhost:3000/postRoute', {
        method: "POST",
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(projectData)
    })   
}

// GET from WeatherAPI - Async Funtion
async function getWeatherApi(url, key, zipCode) { 
    let tempJSON = await fetch(url+zipCode+',us&units=imperial&appid='+key); 
    let tempObj = await tempJSON.json(); 
    let temp = tempObj.main.temp;
    return temp
};

// UPDATE UI with data from server
function updateUI(projectData){
    const dateElement = document.getElementById('date')
    const tempElement = document.getElementById('temp')
    const contentElement = document.getElementById('content')
    dateElement.innerHTML = `<span class="entry-item">Date: </span>${projectData.date}`
    contentElement.innerHTML = `<span class="entry-item">You feel: </span>${projectData.mood}`
    tempElement.innerHTML = `<span class="entry-item">Temperature: </span>${projectData.temp}`
}

// Function called by event listener
async function performUpdate() {
    
    // Create a new date instance dynamically with JS
    let day = new Date();
    let date = day.getMonth()+1+'.'+ day.getDate()+'.'+ day.getFullYear();

    // First retrieve user data from the client side (zipCode and mood)
    let zipCode = document.getElementById('zip').value;
    let mood = document.getElementById('feelings').value;

    // Using the zip code that the user entered, call the weather API and retrieve temperature
    let temp = await getWeatherApi(baseURL, baseKey, zipCode);

    // Post the required data to server from the front end (date, temperature and mood )
    postToServer(date, temp, mood);

    // Get data back from server to front end
    let projectData = await getFromServer();

    // Update UI
    updateUI(projectData)                                                                                                                                                                                                                                                            
}; 

//----------------------------------------------------------------------------
// Runtime Code
//----------------------------------------------------------------------------

// Define weather API URL and Key
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const baseKey = '278a4bb0ed3e1dc04317050dfdf8f145';

// Get the generate button element
const generateListener = document.getElementById('generate');

// Create event listener on the click of the generate button
generateListener.addEventListener("click", performUpdate)