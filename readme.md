DELIGHTS SEARCH BURGER APP - A MORINGA SCHOOL PROJECT DESIGNED BY WAMUYU WACHIRA.

#description.
The Delights Burger Search Application allows one to make a search of a burger with an id number. Once input, the user can see details of the burger(apart from the image - the API did not have that) and is able to access an external URL link to get further details about the burger. The data is refreshed with every id put in.

Technologies used:
HTML,CSS and Javascript


## Setup Installations Requirements
   To run the application, in your terminal:

   1. Clone or download the Repository
   2. cd into directory then run `cd Delights Burger App`
  3. Open the repository with your suitable text editor.
  4. Run the server to get the application fully working


#Overview.
The Application has three main parts

1. The Home Page - the user is welcomed to the application and there is a search bar where the user can type in the id of the burger they are looking for.

￼
2. The Burger Details Section - the user sees the details for the burger here after submitting the id. The two boxes, which flash green to indicate approval and red to flash disapproval, are there for the client to give their views on the website they have seen.
Note: The Burger Picture is constant across all searches for uniformity…the API failed to provide photos for each specific burger

￼
3.The contact us Page - the user is able to leave a comment for feedback on the application.
￼

Core Features
1. User is able to see the foods being showcased.
2. There is a welcome section where the user is greeted and is able to see the meals being showcased.
3. Will have a contact form at the bottom which will enable people to leave comments in the web app.
4. Show a like feature to like the recipe.

The API Data Used in this MVP:
http://localhost:3000/burgers - derived from BurgerAPI.

How to use the Application.
1. After opening your editor, run the following command in your terminal to initialize the server.
json-server —watch db.json

2. Type in any number from 0 - 27 and submit (by pressing enter) to display the results.
The user is permitted to type any number from 0-27 and burger details  for that specific number will pop-up. (this ensures that only one search results comes up to avoid the page being too long)

## Known Bugs
If you find a bug (the website couldn't handle the query and / or gave undesired results), kindly open an issue [here](https://github.com/purplexiion/final-project.git) by including your search query and the expected result.
