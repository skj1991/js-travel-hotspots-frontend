class Trip {
    constructor(trip, tripAttributes){
        //debugger
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
        // console.log(this)
    }

    renderTripCard(){
        // return `
        // <div data-id=${this.id}>
        // <img src=${this.image_url} height="200" width="250">
        // <h2>${this.title}</h3>
        // <h3>${this.city}</h3>
        // <h4>${this.country.name}</h4>
        // <p>${this.description}</p>
        // <p>${this.rating}</p>
        // <p>${this.hotel}</p>
        // <p>${this.must_visit}</p>
        // <p>${this.top_restaurant}</p>
        // <button data-id=${this.id}>edit</button>
        // </div>
        // <br><br>`;

       return `<div class="col-md-4">
        <div class="card mb-4 shadow-sm">
          <img src=${this.image_url} class="card-img-top" alt="...">
          <div class="card-body">
            <h4 class="card-title">${this.title}</h4>
            <h5 class="card-text">${this.city}</h5>
            <p class="card-text">${this.description}</p>
            <p class="card-text">${this.rating}</p>
            <p class="card-text">${this.hotel}</p>
            <p class="card-text">${this.must_visit}</p>
            <p class="card-text">${this.top_restaurant}</p>
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