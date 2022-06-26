//declaring Variables
const searchForm = document.querySelector("form");
const searchResultDiv = document.querySelector(".item");
const container = document.querySelector(".container");
let searchQuery = parseInt("");


//making the event listener - functioning
searchForm.addEventListener("submit", (e) => {
    e.preventDefault();
    searchQuery = e.target.querySelector("input").value;
    fetchAPI(searchQuery);
});

//loading the API - done
async function fetchAPI(id) {
    let baseUrl = `http://localhost:3000/burger/${id}`;
    const response = await fetch(baseUrl);
    let data = await response.json();
    generateHTML(data);
};


//generating the results on the web
function generateHTML(results) {
    container.classList.remove("initial");
    let generatedHTML = "";
    let result = Object.values(results);
    console.log(result)
    for (i = 0; i < result.length; i++) {
        generatedHTML = `
             <div class = "item" >
            <img src = "amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg"alt = "" >
        <div class = "flex-container" >
                    <h1 class = "title">${result[1]} </h1> 
                    <a class = "view-btn" href = " ${result[3]}" > Visit their Website here</a> 
                    </div >
     <p class = "item-data" > Restaurant Name: ${result[2]} </p> 
     <p class="item-data"> Description: ${result[4]}</p>
     <p class="item-data"> <br>Ingredients: ${result[5]}</p>
     <p></p>
     <div>
                                `
    };
    searchResultDiv.innerHTML = generatedHTML;
}

//making the like button(done)
var btn1 = document.querySelector('#green');
var btn2 = document.querySelector('#red');

btn1.addEventListener('click', function() {

    if (btn2.classList.contains('red')) {
        btn2.classList.remove('red');
    }
    this.classList.toggle('green');

});

btn2.addEventListener('click', function() {

    if (btn1.classList.contains('green')) {
        btn1.classList.remove('green');
    }
    this.classList.toggle('red');

});


//making the submit response on the contact us form(done)
const form = document.getElementById("form-contact")
form.addEventListener('submit', (event) => {
    event.preventDefault();
});