class Trip {
    constructor(trip, tripAttributes){
        this.id = trip.id
        this.title = tripAttributes.title 
        this.city = tripAttributes.city
        this.country = tripAttributes.country
        this.description = tripAttributes.description
        this.rating = tripAttributes.rating
        this.hotel = tripAttributes.hotel
        this.must_visit = tripAttributes.must_visit
        this.top_restaurant = tripAttributes.top_restaurant
        this.image_url = tripAttributes.image_url
        Trip.all.push(this)
        console.log(this)
    }

    renderTripCard(){
     return `
      <div class="col-10">
        <div class="card mb-4 shadow-sm">
          <img src=${this.image_url} class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">${this.title}</h4>
            <h5 class="card-text">Destination: ${this.city}</h5>
            <p class="card-text">Travel Details: ${this.description}</p>
            <p class="card-text">Trip Rating: ${this.rating}</p>
            <p class="card-text">Hotel: ${this.hotel}</p>
            <p class="card-text">Must Visit Attraction: ${this.must_visit}</p>
            <p class="card-text">Top Restaurant: ${this.top_restaurant}</p>
            <div class="d-flex justify-content-between align-items-center">
              <div class="btn-group">
                <button type="button" class="btn btn-sm btn-outline-secondary">View</button>
                <button type="button" class="btn btn-sm btn-outline-secondary">Edit</button>
              </div>
              <small class="text-muted">Country: ${this.country.name}</small>
            </div>
          </div>
        </div>
      </div>`

    } 
}
Trip.all = [];
