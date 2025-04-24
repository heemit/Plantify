document.addEventListener("DOMContentLoaded", () => {
    const locationKey = "userLocation";
    const expiryKey = "locationExpiry";

    // Function to get and store location
    function storeUserLocation() {
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition((position) => {
                const locationData = {
                    latitude: position.coords.latitude,
                    longitude: position.coords.longitude
                };

                // Store location & expiry time (1 hour from now)
                localStorage.setItem(locationKey, JSON.stringify(locationData));
                localStorage.setItem(expiryKey, Date.now() + 60 * 60 * 1000);

                console.log("Location stored:", locationData);
            }, (error) => {
                console.error("Error getting location:", error.message);
            });
        } else {
            console.error("Geolocation is not supported by this browser.");
        }
    }

    // Check if location exists and is still valid
    const storedExpiry = localStorage.getItem(expiryKey);
    if (!storedExpiry || Date.now() > storedExpiry) {
        console.log("Fetching new location...");
        storeUserLocation();
    } else {
        console.log("Using stored location:", JSON.parse(localStorage.getItem(locationKey)));
    }
});