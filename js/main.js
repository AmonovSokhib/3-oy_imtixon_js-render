   

   const pokemonArray = pokemons.slice(0, 6);
   const moviesArray = movies.slice(6, 12);
   let newArray = pokemonArray.concat(moviesArray)
   let elBtnPokimon = document.querySelector(".btn-pokemon")
   let elBtnMovies = document.querySelector(".btn-movies")
   let elBtnBoth = document.querySelector(".btn-both")
   let elBtnClean = document.querySelector(".btn-clean")
   let elList = document.querySelector(".list")
   let elLogo = document.querySelector(".render-logo")

   elBtnPokimon.addEventListener("click", function(evt){
    evt.preventDefault();
    elLogo.innerHTML=null;
    elList.innerHTML = null;
    const newLogoPokemon = document.createElement("img");
    newLogoPokemon.src = "./images/pokemon_logo.png";
    newLogoPokemon.width = 600
    newLogoPokemon.height = 300
    elLogo.appendChild(newLogoPokemon)
    render(pokemonArray)
    
   })
   elBtnMovies.addEventListener("click", function(evt){
    evt.preventDefault();
    elLogo.innerHTML=null;
    elList.innerHTML = null;
    const newLogoMovies = document.createElement("img");
    newLogoMovies.src="./images/pngwing.com.png";
    newLogoMovies.width = 600
    newLogoMovies.height = 400
    elLogo.appendChild(newLogoMovies)
    render(moviesArray)
    
   })
   elBtnBoth.addEventListener("click", function(evt){
    evt.preventDefault();
    elLogo.innerHTML=null;
    elList.innerHTML = null;
    const newLogoPokemon = document.createElement("img");
    newLogoPokemon.src = "./images/pokemon_logo.png";
    newLogoPokemon.width = 290
    newLogoPokemon.height = 250
    elLogo.appendChild(newLogoPokemon)
    const newLogoMovies = document.createElement("img");
    newLogoMovies.src="./images/pngwing.com.png";
    newLogoMovies.width = 290
    newLogoMovies.height = 250
    elLogo.appendChild(newLogoMovies)
    render(newArray)
    
   })
   elBtnClean.addEventListener("click", function(evt){
    evt.preventDefault();
    elLogo.innerHTML=null;
    elList.innerHTML = null;
   })


function render(array) {
    for (const item of array) {


        if (item.name) {
            const newLi =document.createElement("li")
            newLi.classList = "card bg-warning li-card mb-5";
            const newImg = document.createElement("img");
            newImg.classList = "card-img-top";
            newImg.src = item.img;
            newImg.width = 200
            newImg.height = 250
            const newDiv = document.createElement("div");
            newDiv.classList = "card-body m-0 text-center";
            const newH3 = document.createElement("h3");
            newH3.textContent = item.name;
            newH3.classList = "card-title";
            const newH4 = document.createElement("h4");
            newH4.textContent = item.candy
            newH4.classList = "card-text";
            const newP1 = document.createElement("p");
            newP1.textContent = item.weight
            newP1.classList = "card-wight";
            const newP2 = document.createElement("p");
            newP2.textContent = item.height
            newP2.classList = "card-height";
            newLi.appendChild(newImg)
            newLi.appendChild(newDiv)
            newDiv.appendChild(newH3)
            newDiv.appendChild(newH4)
            newDiv.appendChild(newP1)
            newDiv.appendChild(newP2)
            elList.appendChild(newLi)  
        }
        else{
            const newLi =document.createElement("li")
            newLi.classList = "card  li-card mb-5";
            const newImg = document.createElement("img");
            newImg.classList = "card-img-top";
            newImg.src = `https://i.ytimg.com/vi/${item.ytid}/mqdefault.jpg`;
            newImg.width = 200
            newImg.height = 200
            const newDiv = document.createElement("div");
            newDiv.classList = "card-body m-0 text-center";
            const newH3 = document.createElement("h3");
            newH3.textContent = item.Title;
            newH3.classList = "card-title bg-primary";
            const newH4 = document.createElement("h4");
            newH4.textContent = item.fulltitle
            newH4.classList = "card-text";
            const newP1 = document.createElement("p");
            newP1.textContent = item.imdb_rating
            newP1.classList = "card-wight";
            const newP2 = document.createElement("p");
            newP2.textContent = item.movie_year
            newP2.classList = "card-height";
            const newDiv2 = document.createElement("div")
            newDiv2.classList = "d-flex justify-content-between"
            const newA = document.createElement("a")
            newA.classList = "btn btn-light text-danger border-danger"
            newA.textContent = `Watch trailler`
            newA.href = `https://www.youtube.com/watch?v=${item.ytid}`
            const newA1 = document.createElement("a")
            newA1.classList = "btn btn-light text-success border-success"
            newA1.href = `#`
            newA1.textContent = `Bookmark`
            const newA2 = document.createElement("a")
            newA2.classList = "btn btn-light text-info border-info"
            newA2.href = `#`
            newA2.textContent = `More info`
            newLi.appendChild(newImg)
            newLi.appendChild(newDiv)
            newDiv2.appendChild(newA)
            newDiv2.appendChild(newA1)
            newDiv2.appendChild(newA2)
            newDiv.appendChild(newH3)
            newDiv.appendChild(newH4)
            newDiv.appendChild(newP1)
            newDiv.appendChild(newP2)
            newDiv.appendChild(newDiv2)
            elList.appendChild(newLi)
        }
        
    }
    return elList; 
} 
