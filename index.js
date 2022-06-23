//fetching the data from the API and then loading the DOM
document.addEventListener("DOMContentLoaded", () => {
    let baseUrl = 'http://localhost:3000/burger';
    let burgerList = document.querySelector('burgerList')
    let searchBar = document.querySelector("search-bar")

    //fetching the data from the API
    function fetchBurgers() {
        fetch(baseUrl)
            .then(res => res.json())
            .then(data => (console.log(data)))
    }

    fetchBurgers()

    //displaying Burger Content
    const displayBurgerContent = (burger) => {
        const burgerInfo = burger.map((burger) => {
                return `
         <li class="burger">
         <h2> ${burger.name}</h2>
         <p>${burger.description}</p>
         </li>

            `
            })
            .join(' ');
        burgerList.innerHTML = burgerInfo
    }

    //making the like button

    //making the submit response on the contact us form

    //making a search bar to load up the burger name
    searchBar.addEventListener('keyup', () => {
        console.log(e)
    })


    //calling the fetch function
    initialFetch()

    function displayBurgerName(burger) {
        let item = document.createElement("h1")
        item.setAttribute("class", "burger-name")
        item.innerText = burger.name
        movieTitlesList.append(item)
    }


})