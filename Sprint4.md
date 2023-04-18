# Sprint4.md

- Detail work you've completed in Sprint 4
- List frontend unit and Cypress tests
- List backend unit tests
- Show updated documentation for your backend API

## Front-end

Work (to) Completed

- Test functional integration (especially edit)

Unit Tests:

- AppComponent: Displays the navbar & router-outlet
  - should have as title 'recipe-book'
- RecipesComponent: Displays a recipe card for each recipe
  - should render recipe container
  - should display a list of recipes
  - should load data from the .json file

Cypress Tests:

- routing > "/"
  - should redirect to "/recipes"
  - should have an h1 containing "Recipe Book"

## Back-end

Work (to) Completed:

- KT: Fix 'edit' functionality (currently non-functional boilerplate code)


Unit Tests:

- aeriwugbnau

[Back-end API documentation](https://documenter.getpostman.com/view/1766794/2s93RMTuYD)

## Final Presentation

*[Just notes for us -- delete this section before submission]*

Demonstrate new functionality implemented.
Show results of all unit tests (including those from Sprint 3).

Overview of completed project as if pitching it to someone who has never seen it:

> Demonstrate all front-end functionality  
>
> - CRUD
> - Search
>
> Detailed explanation of backend API
>
> - main.py: Entrypoint; Uses handlers to initialize server, routes, and database connection
>   - DB_Connect.py: Handles connection to MongoDB
>   - DB_Handlers.py: Handles all database interactions
>   - Route_Handler.py: Handles API routing; using DB_Handlers, listens for HTTP requests & responds appropriately
> - Currently supports basic CRUD operations:
>   - Show [Postman documentation](https://documenter.getpostman.com/view/1766794/2s93RMTuYD)
>   - Overview: (local baseURL = http://localhost:4201)
>     - Add: POST > baseURL/recipes/add
>     - Delete: DELETE > baseURL/recipes/delete/:id
>     - Edit: PUT > baseURL/recipes/edit/:id
>     - Get all: GET > baseURL/recipes
>     - Get one: GET > baseURL/recipes/:id
