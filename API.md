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
