if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(
        (position) => {
            const coordinates = position.coords; // "coords" replaced with "koordinaten"
            const timestamp = position.timestamp; // "timestamp" replaced with "zeitstempel"

            // Retrieve all relevant values
            const latitude = coordinates.latitude;
            const longitude = coordinates.longitude;
            const altitude = coordinates.altitude;
            const accuracy = coordinates.accuracy;
            const altitudeAccuracy = coordinates.altitudeAccuracy; 
            const heading = coordinates.heading;
            const speed = coordinates.speed;

            alert(`Geodata:
Latitude: ${latitude}
Longitude: ${longitude}
Altitude: ${altitude}
Accuracy: ${accuracy} 
Altitude Accuracy: ${altitudeAccuracy} 
Heading: ${heading}
Speed: ${speed}
Timestamp: ${new Date(timestamp).toLocaleString()}`);
        },
        (error) => {
            alert(`Error: ${error.message}`);
        }
    );
} else {
    alert("Geolocation is not supported by this browser.");
}

// Checks if geolocation is supported by the browser and if so retrieves
// the user's geolocation . If geolocation is not supported, it alert