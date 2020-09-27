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
          //debugger
          let newTrip = new Trip(trip, trip.attributes)

         document.querySelector('#trip-container').innerHTML += newTrip.renderTripCard();
  
        })
      )
}


function createFormHandler(e) {
    e.preventDefault()
    const titleInput = document.querySelector("#input-title").value
    const cityInput = document.querySelector("#input-city").value
    const descriptionInput = document.querySelector("#input-description").value
    const ratingInput = document.querySelector("#input-rating").value
    const hotelInput = document.querySelector("#input-hotel").value
    const mustVisitInput = document.querySelector("#input-visit").value
    const restaurantInput = document.querySelector("#input-restaurant").value
    const imageInput = document.querySelector("#input-url").value
    const countryId = parseInt(document.querySelector("#countries").value)
    postFetch(titleInput, cityInput, descriptionInput, ratingInput, hotelInput, mustVisitInput, restaurantInput, imageInput, countryId)
}

function postFetch(title, city, description, rating, hotel, must_visit, top_restaurant, image_url, country_id){
    let bodyData = {title, city, description, rating, hotel, must_visit, top_restaurant, image_url, country_id}

    fetch(endPoint, {
        //POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
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