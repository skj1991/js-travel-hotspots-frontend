const endPoint = "http://localhost:3000/api/v1/trips";

document.addEventListener('DOMContentLoaded',() => {
  getTrips()  

  const createTripForm = document.querySelector('#create-trip-form')
  createTripForm.addEventListener('submit', (e) => createFormHandler(e))
})

function getTrips() {
  fetch(endPoint)
    .then(response => response.json())
    .then(trips => 
        trips.data.forEach(trip => {
          const tripMarkup = `
            <div data-id=${trip.id}>
              <img src=${trip.attributes.image_url} height="200" width="250">
              <h2>${trip.attributes.title}</h2>
              <h3>City: ${trip.attributes.city}</h3>
              <h4>Country: ${trip.attributes.country.name}</h4>
              <p>Hotel: ${trip.attributes.hotel}</p>
              <p>Must Visit: ${trip.attributes.must_visit}</p>
              <p>Top Restaurant: ${trip.attributes.top_restaurant}</p>
              <p>About My Trip: ${trip.attributes.description}</p>
              <p>Rating: ${trip.attributes.rating}</p>
              <button data-id=${trip.id}>edit</button>
            </div>
            <br><br>`;
  
            document.querySelector('#trip-container').innerHTML += tripMarkup
        })
      )
}

function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const descriptionInput = document.querySelector("#input-description").value
    const imageInput = document.querySelector("#input-url").value
    const countryId = parseInt(document.querySelector("#countries").value)
    postFetch(titleInput, descriptionInput, imageInput, countryId)
}

function postFetch(title, description, image_url, country_id){
    let tripBodyData = {title, description, image_url, country_id}

    fetch(endPoint, {
        //POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(tripBodyData)
    })
    .then(response => response.json())
    .then(trip => {
        console.log(trip);
        const tripData = trip.data
        const tripMarkup = `
        <div data-id=${trip.id}>
              <img src=${tripData.image_url} height="200" width="250">
              <h2>${tripData.title}</h2>
              <h3>${tripData.city}</h3>
              <h4>${tripData.country.name}</h4>
              <p>${tripData.hotel}</p>
              <p>${tripData.must_visit}</p>
              <p>${tripData.top_restaurant}</p>
              <p>${tripData.description}</p>
              <p>${tripData.rating}</p>
              <button data-id=${trip.id}>edit</button>
        </div>
        <br><br>`;

        document.querySelector('#trip-container').innerHTML += tripMarkup
    })
}