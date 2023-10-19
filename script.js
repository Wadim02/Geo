const map = L.map('map').setView([51.505, -0.09], 13);

// Adaugarea hărții de bază (de exemplu, harta OpenStreetMap)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
}).addTo(map);

// Obținerea geolocației utilizatorului (folosește navigator.geolocation)
navigator.geolocation.getCurrentPosition(function (position) {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;
	const accuracy = position.coords.accuracy;
	
	document.getElementById("latitude").textContent += latitude;
    document.getElementById("longitude").textContent += longitude;
    document.getElementById("accuracy").textContent += accuracy + " metri";
	
// Setarea centrului hărții la locația utilizatorului
    map.setView([latitude, longitude], 13);
	
    // Adaugarea unui marker pentru geolocație pe hartă
    L.marker([latitude, longitude]).addTo(map)
        .bindPopup('Locatia ta este aici.')
        .openPopup();
});