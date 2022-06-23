//fetching the data from the API and then loading the DOM
document.addEventListener("DOMContentLoaded", () => {
        //declaring some variables here that will be used later
        let burgerList = document.querySelector('burgerList');
        let searchBar = document.querySelector("searchBar");
        let burgerLists = [];
        loadBurgers()

        //making a search bar to load up the burger name
        searchBar.addEventListener('keyup', (e) => {
            e.preventDefault()
            const searchString = e.target.value;
            const filteredburgerList = burgerLists.filter(burger => {
                return burger.name.includes(searchString) || burger.ingredients.includes(searchString);
            });
            displayBurgerContent(filteredburgerList);
        });

        //fetching the data from the API
        fetch('http://localhost:3000/burger')
            .then(response => response.json())
            .then(data => {
                console.log(data)
                document.querySelector('.headings_Recipe') = burger.name
                document.querySelector('.headings-ingredients') = burger.ingredients
                document.querySelector('.headings-information') = burger.description

            })


        //displaying Burger Content in the search tab
        const displayBurgerContent = (burger) => {
            const burgerInfo = burger.map((burger) => {
                    return `
         <li class="burger">
         <h2> ${burger.name}</h2>
         <p>${burger.description}</p>
         </li>`
                })
                .join(' ');
            burgerList.innerHTML = burgerInfo
        }


        //making the like button
        const likeBtn = document.querySelector(".like__btn");
        let likeIcon = document.querySelector("#icon"),
            count = document.querySelector("#count");

        let clicked = false;

        likeBtn.addEventListener("click", () => {
            if (!clicked) {
                clicked = true;
                likeIcon.innerHTML = `<i class="fas fa-thumbs-up"></i>`;
                count.textContent++;
            } else {
                clicked = false;
                likeIcon.innerHTML = `<i class="far fa-thumbs-up"></i>`;
                count.textContent--;
            }
        });

        //making the submit response on the contact us form
        const form = document.getElementById("form-contact")

        form.addEventListener('submit', (event) => {
            event.preventDefault();
        });
    }) //calling the fetch function