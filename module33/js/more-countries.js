
const restCountries = () => {
    fetch('https://restcountries.com/v2/all')
    .then(res => res.json())
    .then(data => displayCountries(data))
}

restCountries()

const displayCountries  = countries => {

    // for(const country of countries){
    //     console.log(country)
    // }

   
    const countriesDiv = document.getElementById('countries')
   countries.forEach(country => {

    // console.log(country);

    const div = document.createElement('div')
    div.classList.add('country')

    div.innerHTML = `
        <h3>${country.name}</h3>
        <p>${country.capital}</p>
        <button onClick="loadCountryByName('${country.name}')" >details</button>
    `;
    countriesDiv.appendChild(div)


   })
}



const loadCountryByName = name => {

    const url = `https://restcountries.com/v2/name/${name}`
    // console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => displayCountriesDetail(data[0]))
}

const displayCountriesDetail = country => {
    console.log(country)

    const countryDiv = document.getElementById('countries-detail')

    countryDiv.innerHTML = `
    <h4>${country.name}<h4/>
    <p>Population: ${country.population}</p>
    <img width="200px" src="${country.flag}" />

    `
}