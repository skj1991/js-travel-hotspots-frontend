class Country {

    constructor(country, countryAttributes){
        this.id = country.id
        this.name = countryAttributes.name
        Country.all.push(this)
    }

    static findCountryById(id) {
        return this.all.find(country => country.id === id);
      }
}
Country.all = [];