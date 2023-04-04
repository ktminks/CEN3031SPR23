# Sprint3.md

- Detail work you've completed in Sprint 4
- List frontend unit and Cypress tests
- List backend unit tests
- Show updated documentation for your backend API

## Front-end

### Front-end: Sprint Goals

- Add support for adding & deleting recipes

### Front-end: Work Completed

- ujiwevbnawr

## Back-end

### Back-end: Sprint Goals

- Fix 'edit' functionality (currently non-functional boilerplate code)
  - Routing is correct, error is in edit function in DB_Handlers.py
  - After fix, add working example to documentation (Postman)

### Back-end: Work Completed

- aerthaerthj

### Back-end: Testing and Unit Tests

- aeriwugbnau

## Back-end: Recipe Book API Documentation

### API v2.0

- [API documentation](https://documenter.getpostman.com/view/1766794/2s93RMTuYD)

### API v1.0

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
