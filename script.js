let searchBar = document.getElementById("searchoption");
let searchBtn = document.getElementById("searchbtn");

if (searchBar) {
	searchBtn.addEventListener("click", function (res) {
		console.log(searchBar.value);
		sendApiRequest();
	});
}

async function sendApiRequest() {
	document.querySelector(".cards").innerHTML = "";
	const api_id = "7260bb3b";
	const api_key = "36c7bddc15c8e098dbe3767a9ecdc059";
	var usrdata = searchBar.value;
	console.log(usrdata);
	let response = await fetch(
		"https://api.edamam.com/api/recipes/v2?type=public&app_id=" +
			api_id +
			"&app_key=" +
			api_key +
			"&q=" +
			usrdata
	);
	console.log(response);
	let data = await response.json();
	console.log(data);
	useApiData(data);
}

function getData(hits, index) {
	return `
        <div class="card recipecard" style="width: 200px; ">
             <img src="${hits[index].recipe.image}"
                 class="card-img-top cardimg" alt="...">
            <div class="card-body">
                <h5 class="card-title">${hits[index].recipe.label}</h5>
                <p class="card-text">Calories: ${Math.round(
									hits[index].recipe.calories
								)}</p>                
                <p class="card-text">Cuisine: ${
									hits[index].recipe.cuisineType
								}</p>
                <p class="card-text">Diet Type: ${
									hits[index].recipe.dietLabels
								}</p>
                <a href="${
									hits[index].recipe.url
								}" class="btn btn-primary">Start Cooking</a>
            </div>
        </div>`;
}

function useApiData(data) {
	var hits = data.hits;
	for (let i = 0; i < 4; ++i) {
		document.querySelector(".cards").innerHTML += getData(hits, i);
	}
}
