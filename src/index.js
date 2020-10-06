const endPoint = "http://localhost:3000/api/v1/trips";

document.addEventListener('DOMContentLoaded',() => {
  getTrips()  
  getCountries()

  const createTripForm = document.querySelector('#create-trip-form')
  createTripForm.addEventListener('submit', (e) => {
      createFormHandler(e);
      reset()
    })

  const tripContainer = document.querySelector("#trip-container")
  tripContainer.addEventListener('click', e => {
      const id = parseInt(e.target.dataset.id); 
      const t = Trip.findById(id); 
      document.querySelector('#update-trip').innerHTML = t.renderUpdateForm();
  })
})

function reset() {
    let form = document.getElementById("create-trip-form");
    form.reset()
}
            
function getTrips() {
  fetch(endPoint)
    .then(response => response.json())
    .then(trips => {
        const t = trips.data.sort(function(a, b) {
            let titleA = a.attributes.title.toUpperCase();
            let titleB = b.attributes.title.toUpperCase();
            if(titleA < titleB){
                return -1
            }
            if(titleA > titleB){
                return 1
            }
            return 0;
        })
        //debugger
        t.forEach(trip => {
         const newTrip = new Trip(trip, trip.attributes)
         document.querySelector('#trip-container').innerHTML += newTrip.renderTripCard();
        })
    })
}

function getCountries(){
    fetch("http://localhost:3000/api/v1/countries")
    .then(response => response.json())
    .then(countries =>
        countries.data.forEach(country => {
            const newCountry = new Country(country, country.attributes)
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
    let foundCountry = Country.findCountryById(country_id.toString())
    let createdTrip = {title, city, description, rating, hotel, must_visit, top_restaurant, image_url,country: foundCountry}
    fetch(endPoint, {
        //POST request
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(bodyData)
    })
    .then(response => response.json())
    .then(trip => {
        console.log(trip);
        const newTrip = new Trip(trip, createdTrip) 
        document.querySelector('#trip-container').innerHTML += newTrip.renderTripCard()
        
    })
}