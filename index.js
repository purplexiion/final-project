//loading the DOM
document.addEventListener("DOMContentLoaded", () => {

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
        mimicServerCall(baseUrl)
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
            <img src = ${result[4]} = "" >
        <div class = "flex-container" >
                    <h1 class = "title">${result[1]} </h1> 
                    <a class = "view-btn" href = "${result[3]}" >Click this to see more info on their website</a> 
                    </div >
     <p class = "item-data" > Restaurant Name: ${result[2]} </p> 
     <p class="item-data"> Description of the burger: ${result[5]}</p>
     <p class="item-data"> <br>Ingredients: 
     <ul class="item-data">
        <li>${result[6]}</li>
     </ul></p>
     <div>
                                `
        };
        searchResultDiv.innerHTML = generatedHTML;
        console.log(result[3])
    }

    //making the like button(done)
    (function(d, e, s) {
        if (d.getElementById("likebtn_wjs")) return;
        a = d.createElement(e);
        m = d.getElementsByTagName(e)[0];
        a.async = 1;
        a.id = "likebtn_wjs";
        a.src = s;
        m.parentNode.insertBefore(a, m)
    })(document, "script", "//w.likebtn.com/js/w/widget.js");

    //making the submit response on the contact us form(done)
    const form = document.getElementById("input")
    form.addEventListener('submit', (event) => {
        event.preventDefault();
    });

    //mimicking the server call
    function mimicServerCall(url = "http://localhost:3000/burger", config = {}) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() {
                let isRandomFailure = Math.random() < .2
                if (isRandomFailure) {
                    reject("Random server error. Try again.");
                } else {
                    resolve("Pretend remote server notified of action!");
                }
            }, 300);
        });
    }
})