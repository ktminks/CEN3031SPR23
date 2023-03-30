# Sprint3.md

## Back-end

### Breaking changes

**Before this version of the back-end will run on your local machine, you will need to ensure the following dependencies and installed and working properly:**

- Python 3.11+
- pipenv

pipenv is the Python equivalent of npm. In larger projects like these, a package manager like this is used to manage all dependencies and environmental variables at once. These dependencies are listed in `Pipfile`, which is the Python equivalent of JavaScript's `package.json`.

#### *Installing pipenv*

To install pipenv, run the following command:

`pip install pipenv`

Once the install is finished, close and reopen the command line. Check if the install was successful by running the following command:

`pipenv --version`

If you get some variation of the error `pipenv: command not recognized`, you will need to add pipenv's install location to your PATH variable. To do this, run the following command:

`where pipenv`

Copy the output of this command and paste it into your PATH variable.

#### *Installing dependencies*

To install back-end dependencies, run the following command from the root directory of the project:

`pipenv install`

Once the dependencies are installed, you're done. This only needs to be done once (per machine).

#### *Running the back-end*

As before, to start the server/API, run the following command from the root directory of the project:

`npm run server`

There is now another option to run the back-end in development mode, which will automatically restart the server/API whenever a file is changed. To do this, run the following command instead:

`npm run server-dev`

Both versions start the server/API on port 4021.

### Back-end: Work Completed

- Code & dependency restructuring:
  - Removed all Go code in favor of Python
  - Packaged back-end dependencies using pipenv
  - Separated functions & handlers into their own files:
    - DB_Connect.py: Handles connection to MongoDB
    - DB_Handlers.py: Handles all database interactions
    - Route_Handler.py: Handles routing of API requests/responses between front-end and database
    - main.py: Handles API and server initialization
- Implemented API that supports basic CRUD operations:
  - [API documentation](https://documenter.getpostman.com/view/1766794/2s93RMTuYD)
  - Overview: (local baseURL = http://localhost:4201)
    - Add: POST > baseURL/recipes/add
    - Delete: DELETE > baseURL/recipes/delete/:id
    - Edit: PUT > baseURL/recipes/edit/:id
    - Get all: GET > baseURL/recipes
    - Get one: GET > baseURL/recipes/:id

### Back-end: Testing and Unit Tests

To avoid any confusion and unecessary errors, the API from sprint 2 was used for testing and updated with GET and DELETE requests. The API is found in src/HTTP_Receive.py and the unit tests are found in src/HTTP_Send, as in sprint 2, and src/HTTP_Receive.py below the API. Descriptions of the API updates and overall design can be found in the API doc below. The unit tests follow the steps a user would take if they were sending these HTTP requests through a frontend language. The file src/HTTP_Send.py tests the POST request and stores three recipes into the mongo database (mongoDB). The unit tests in src/HTTP_Receive.py then test GET and GET ALL to find the number of recipes in the mongoDB and if the wanted recipe is already in the mongoDB or not. The next unit test is for the DELETE request and must be tested seperately and after the other unit tests to avoid errors. The unit test deletes a wanted recipe, then tests if the number of recipes in the mongoDB is one less than the previous count.

### Back-end: To Do

- Become familiar with Python-Flask
- Fix 'edit' functionality (currently non-functional boilerplate code)
  - Routing is correct, error is in edit function in DB_Handlers.py
  - After fix, add working example to documentation (Postman)

## Front-end

### Front-end: Work Completed

- Integrated with back-end (data is pulled from database or falls back to local)
- Separated data services into their own files:
  - recipe-data.service.ts: Handles all data manipulation for components
  - api.service.ts: Communicates with the API or falls back to mock data
  - data-validation.service.ts: Formats data from and to API

### Front-end: To Do

- Add support for adding & deleting recipes

## API Documentation

### Recipe Book API

Description: This CRUD API is the basic framework of the recipe book project. It will retreive HTTP requests sent from the frontend framework and handle data based on the request sent. Being a CRUD API, it will allow the creation, reading, updating, and deletion of any recipe the user wants.

#### Create (POST) Request:
- This request tells the API to add the new inputted recipe to the database. The recipe is converted into a python dictionary and stored into the MongoDB cloud database. If the recipe is already in the database then an error is returned.

Example:

The frontend framework sends the recipe data within the HTTP request:
```
{
    "Email": "swe@ufl.edu",
    "Name": "Chocolate Chip Cookies"
    "Source": "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/",
    "ID": 1
}
```
The recipe is stored into MongoDB:
```
_id: ObjectID('6403b8a97244cb2a573c2f2e')
Email: "swe@ufl.edu"
Name: "Chocolate Chip Cookies"
Source: "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/",
ID: 1
```

#### Read (GET) Request:
- This request tells the API to retrieve a recipe based on its name and send it to the frontend framework for the user to view. The database is searched for the recipe's specific name and send the entire recipe as a result if found. If no recipe of the wanted name is found then an error is returned.

Example:

A specific recipe is wanted by using the route /{name} sent by the frontend. If the /{name} value is /Chocolate%20Chip%20Cookies then the Chocolate Chip Cookies recipe is returned:
```
{
    "Email": "swe@ufl.edu",
    "Name": "Chocolate Chip Cookies"
    "Source": "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/",
    "ID": 1
}
```

#### Read (GET) [ALL] Request:
- This request tells the API to retrieve every recipe and send it to the frontend framework for the user to view. Every recipe in the database is searched for and sent into an array in the frontend. The user will then be able to see every recipe in the array.

Example:

Every recipe is wanted by the frontend and sent to it in order of date stored into the database:
```
{
    "Email": "swe@ufl.edu",
    "Name": "Chocolate Chip Cookies"
    "Source": "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/",
    "ID": 1
}
{
    "Email": "swe@ufl.edu",
    "Name": "Linguine al Limone"
    "Source": "https://www.today.com/recipes/pasta-al-limone-t282397",
    "ID": 2
}
```

#### Delete (DELETE) Request:
- This request tells the API to delete a recipe from the database based on its name. The database is searched for the recipe's specific name then deletes the entire recipe. If no recipe of the wanted name is found then an error is returned.

Example: 

A specific recipe is wanted by using the route /{name} sent by the frontend. If the /{name} value is /Chocolate%20Chip%20Cookies then the Chocolate Chip Cookies recipe is deleted.

Before:
```
{
    "Email": "swe@ufl.edu",
    "Name": "Chocolate Chip Cookies"
    "Source": "https://joyfoodsunshine.com/the-most-amazing-chocolate-chip-cookies/",
    "ID": 1
}
```
After:
```
{
}
```
