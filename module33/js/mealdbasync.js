
const searchFood = async () => {
    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    

      // clear data 
      searchField.value = '';

    if(searchText == ''){
        // please write something to display
    }
    else{
        // Load Data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;

        const res = await fetch(url);
        const data = await res.json();
        displaySearchResult(data.meals)

        // fetch(url)
        // .then(res => res.json())
        // .then(data => displaySearchResult(data.meals))
    }


    
}


const displaySearchResult = meals => {

    const searchResult = document.getElementById('search-result');
    searchResult.textContent = '';

    if(meals.length == 0){
        // show no result Found

    }
    meals.forEach(meal => {

        // console.log(meal);

        const div = document.createElement('div');
        div.classList.add('col');
        div.innerHTML = `
        <div onClick="loadMealDetail(${meal.idMeal})" class="card h-100">
            <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title">${meal.strMeal}</h5>
                <p>${meal.strInstructions.slice(0, 200)}</p>
            </div>
        </div>
        
        `;

        searchResult.appendChild(div)


    })

}

const loadMealDetail = async mealId => {

    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    // console.log(mealId)

    const res = await fetch(url);
    const data = await res.json();
    displayMealDetail(data.meals[0])

    // fetch(url)
    // .then(res => res.json())
    // .then(data => displayMealDetail(data.meals[0]))


}


const displayMealDetail = meal => {
    console.log(meal)

    const mealDetail = document.getElementById('meal-detail');
    mealDetail.textContent = '';
    const div = document.createElement('div');
    div.classList.add('card');
    div.innerHTML = `
    
    <img width="200px" src="${meal.strMealThumb}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${meal.strIngredient1}</h5>
      <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
      <a href="${meal.strYoutube}" class="btn btn-primary">Go somewhere</a>
    </div>


    `;

    mealDetail.appendChild(div)
  

}
