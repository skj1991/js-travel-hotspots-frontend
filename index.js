const endPoint = "http://localhost:3000/api/v1/trips";

document.addEventListener('DOMContentLoaded',() => {
  getTrips()  
})

function getTrips() {
  fetch(endPoint)
    .then(response => response.json())
    .then(trips => {
        // remember our JSON data is a bit nested due to our serializer
        trips.data.forEach(trip => {
            debugger
          // double check how your data is nested in the console so you can successfully access the attributes of each individual object
          const tripMarkup = `
            <div data-id=${trip.id}>
              <img src=${trip.attributes.image_url} height="200" width="250">
              <h3>${trip.attributes.title}</h3>
              <h3>${trip.attributes.city}</h3>
              <p>${trip.attributes.country.name}</p>
              <button data-id=${trip.id}>edit</button>
            </div>
            <br><br>`;
  
            document.querySelector('#trip-container').innerHTML += tripMarkup
        })
      })
}