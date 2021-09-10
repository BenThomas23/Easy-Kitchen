let searchBar = document.querySelector("#searchoption");
let searchBtn = document.getElementById("searchbtn");


if (searchBar) {
    searchBtn.addEventListener("click", function (res) {
        console.log(searchBar.value);
        sendApiRequest();
    })}



async function sendApiRequest(){
    const api_id = '7260bb3b';
    const api_key = '36c7bddc15c8e098dbe3767a9ecdc059';
    var usrdata = searchBar.value
    console.log(usrdata);
    let response = await fetch("https://api.edamam.com/api/recipes/v2?type=public&app_id="+api_id+"&app_key="+api_key+"&q="+usrdata);
    console.log(response)
    let data =await response.json()
    console.log(data)
    useApiData(data)
}

function useApiData(data) {
    var hits = data.hits;
    document.querySelector(".cards").innerHTML = `
        <div class="card recipecard" style="width: 200px; margin: 20px; display: inline-block; margin-left: 60px; position: relative; left: (250px*(i+1));">
             <img src="${hits[0].recipe.image}"
                 class="card-img-top cardimg" alt="...">
            <div class="card-body">
                <h5 class="card-title">${hits[0].recipe.label}</h5>
                <p class="card-text">Calories: ${hits[0].recipe.calories}</p>                
                <p class="card-text">Cuisine: ${hits[0].recipe.cuisineType}</p>
                <p class="card-text">Diet Type: ${hits[0].recipe.dietLabels}</p>
                <a href="${hits[0].recipe.url}" class="btn btn-primary">Start Cooking</a>
            </div>
        </div>
        <div class="card recipecard" style="width: 200px; margin: 20px; display: inline-block; margin-left: 60px; position: relative; left: (250px*(i+1));">
             <img src="${hits[1].recipe.image}"
                 class="card-img-top cardimg" alt="...">
            <div class="card-body">
                <h5 class="card-title">${hits[1].recipe.label}</h5>
                <p class="card-text">Calories: ${hits[1].recipe.calories}</p>                
                <p class="card-text">Cuisine: ${hits[1].recipe.cuisineType}</p>
                <p class="card-text">Diet Type: ${hits[1].recipe.dietLabels}</p>
                <a href="${hits[1].recipe.url}" class="btn btn-primary">Start Cooking</a>
            </div>
        </div>
        <div class="card recipecard" style="width: 200px; margin: 20px; display: inline-block; margin-left: 60px; position: relative; left: (250px*(i+1));">
             <img src="${hits[2].recipe.image}"
                 class="card-img-top cardimg" alt="...">
            <div class="card-body">
                <h5 class="card-title">${hits[2].recipe.label}</h5>
                <p class="card-text">Calories: ${hits[2].recipe.calories}</p>                
                <p class="card-text">Cuisine: ${hits[2].recipe.cuisineType}</p>
                <p class="card-text">Diet Type: ${hits[2].recipe.dietLabels}</p>
                <a href="${hits[2].recipe.url}" class="btn btn-primary">Start Cooking</a>
            </div>
        </div>
        <div class="card recipecard" style="width: 200px; margin: 20px; display: inline-block; margin-left: 60px; position: relative; left: (250px*(i+1));">
             <img src="${hits[3].recipe.image}"
                 class="card-img-top cardimg" alt="...">
            <div class="card-body">
                <h5 class="card-title">${hits[3].recipe.label}</h5>
                <p class="card-text">Calories: ${hits[3].recipe.calories}</p>                
                <p class="card-text">Cuisine: ${hits[3].recipe.cuisineType}</p>
                <p class="card-text">Diet Type: ${hits[3].recipe.dietLabels}</p>
                <a href="${hits[3].recipe.url}" class="btn btn-primary">Start Cooking</a>
            </div>
        </div>
        `
}