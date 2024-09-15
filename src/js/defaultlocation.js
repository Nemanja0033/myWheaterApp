// Function to get the user's current location and check the weather
async function getLocationAndCheckWeather() {
    if (navigator.geolocation) {
        // Request the user's current position
        navigator.geolocation.getCurrentPosition(
            async (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude; 
                const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=metric&appid=${apiKey}`);
                const data = await response.json();

                checkWheater(data.name); 
            },
            (error) => {
                // Error callback: Handle errors if location access fails
                console.error("Error getting location: ", error); 
                alert("Unable to retrieve your location. Please check your browser settings."); 
            }
        );
    } else {
        alert("Geolocation is not supported by this browser."); 
    }
}

// Call the function to get location and check weather when the script runs

getLocationAndCheckWeather();
