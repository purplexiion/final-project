document.addEventListener("DOMContentLoaded", () => {
    const searchForm = document.querySelector("form");
    const searchResultDiv = document.getElementsByClassName("search-result");
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
        let generatedHTML = ""
        newgeneratedHTML =
            ` 
        <div class = "item" >
        <img src = "amirali-mirhashemian-sc5sTPMrVfk-unsplash.jpg" alt = "" >
        <div class = "flex-container" >
        <h1 class ="title">${results.name}< /h1>
         <a class = "view-btn" href = " ${results.web}" > Visit their Website here </a> <
        /div> 
        <p class = "item-data" > Restaurant Name:${results.restaurant} </p> <
        /div>
    `;
        console.log(results.name);
        //searchResultDiv.append(generatedHTML);
        replace(generatedHTML, newgeneratedHTML.toString());
        return newgeneratedHTML;

    };

    //making the like button(done)
    let likeBtn = document.getElementsByClassName("like__btn");
    let likeIcon = document.getElementById("icon");
    let countNo = document.getElementById("count");

    let clicked = false;

    likeBtn.addEventListener("click", () => {
        if (!clicked) {
            clicked = true;
            likeIcon.innerHTML = `< i class ="fas fa-thumbs-up" > < /i>`;
            countNo.textContent++;
        } else {
            clicked = false;
            likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
            countNo.textContent--;
        }

    })




    //making the submit response on the contact us form(done)
    const form = document.getElementById("form-contact")
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });

})