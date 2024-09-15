// API key and URL for fetching weather data
const apiKey = 'ce374996745ec5aca1e11ca7c7d1c368'; //API key is not hidden bcs i forgot
const apiUrl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';

// DOM elements
const searchBox = document.querySelector(".search"); 
const searchBtn = document.querySelector(".search-icon"); 
const wheaterIcon = document.querySelector(".wheater-icon");
const wheaterDetails = document.getElementsByClassName('details');
const wheaterLogo = document.getElementById('search-box'); 
const wheaterDisplay = document.getElementById('wheater-display');
const wheaterBody = document.getElementById('wheater-body');

// Function to make the logo interactive
function interactiveLogo() {
    let logo = document.querySelector(".logo"); 

    
    logo.addEventListener("click", function() {
        window.location.href = 'index.html';
    });
}

// Function to check weather for a given city
async function checkWheater(city) {
    try {
        // Fetch weather data from API
        const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
        const data = await response.json(); // Parse JSON response

        // Log the data for debugging
        console.log(data);

        // Update weather details on the page
        document.querySelector(".city").innerHTML = `${data.name} ${data.sys.country}`;
        document.querySelector(".temp").innerHTML = `${Math.round(data.main.temp)} °C`;
        document.querySelector(".description").innerHTML = data.weather[0].description;
        document.querySelector(".humidity").innerHTML = `Humidity: ${data.main.humidity}%`;
        document.querySelector(".wind-speed").innerHTML = `Wind Speed: ${data.wind.speed} km/h`;
        document.querySelector(".pressure").innerHTML = `Pressure: ${data.main.pressure} mbar`;

        // Change weather icon and background based on weather conditions
        setTimeout(() => {
            const weatherMain = data.weather[0].main; // Main weather condition
            switch (weatherMain) {
                case 'Clear':
                    wheaterIcon.src = 'https://openweathermap.org/img/wn/01d@2x.png';
                    document.body.style.backgroundImage = 'url(https://th.bing.com/th/id/R.092dec39b3f9b0981b6312a74c5946fe?rik=VmW015bKkpoJyQ&riu=http%3a%2f%2fmobilemedicalcare.org%2fwp-content%2fuploads%2f2015%2f11%2fblue-sky-1330598792xLu.jpg&ehk=i67vGwDAervHwWBBf%2fgD9nEjgUVQhQu3OGHRItEFR%2fs%3d&risl=&pid=ImgRaw&r=0)';
                    break;
                case 'Clouds':
                    wheaterIcon.src = 'https://openweathermap.org/img/wn/03d@2x.png';
                    document.body.style.backgroundImage = 'url(https://wallpapers.com/images/hd/dark-heaven-5997-x-4000-wallpaper-uluo2y2cmyqvr3uy.jpg)';
                    break;
                case 'Rain':
                    wheaterIcon.src = 'https://openweathermap.org/img/wn/10d@2x.png';
                    document.body.style.backgroundImage = 'url(https://wallpapers.com/images/hd/dark-heaven-5997-x-4000-wallpaper-uluo2y2cmyqvr3uy.jpg)';
                    break;
                case 'Snow':
                    wheaterIcon.src = 'https://openweathermap.org/img/wn/13d@2x.png';
                    document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/435747.jpg)';
                    break;
                case 'Mist':
                    wheaterIcon.src = 'https://openweathermap.org/img/wn/50d@2x.png';
                    document.body.style.backgroundImage = 'url(https://dm0qx8t0i9gc9.cloudfront.net/thumbnails/video/BgrICs-NZj4hksnn3/videoblocks-fumes-of-smoke-over-a-black-background-dense-white-smoke-and-fumes-over-black-background-in-studio-use-this-stock-footage-as-overlay-on-your-own-projects-available-in-4k-resolution_bhm-bephmm_thumbnail-1080_08.png)';
                    break;
                case 'Thunderstorm':
                    wheaterIcon.src = 'https://openweathermap.org/img/wn/11d@2x.png';
                    document.body.style.backgroundImage = 'url(https://wallpaperaccess.com/full/3969209.jpg)';
                    break;
                default:
                    console.log("Weather condition not recognized.");
            }
        }, 50);

    } catch (error) {
        console.error("Error fetching weather data:", error); // Handle any errors
    }
}

// Event listener for the search button
searchBtn.addEventListener("click", function() {
    checkWheater(searchBox.value); // Call function to check weather for the city entered
});
