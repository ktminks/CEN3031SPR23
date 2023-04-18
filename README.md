# Software Engineering Project for CEN3031 (SPR23)

## RECIPE BOOK / MEAL PLANNER

### DESCRIPTION

Users can manage a collection of recipes stored on the cloud. This is the MVP, currently capable of viewing, editing, adding, and deleting recipes.  

### GROUP 32

> Syeda Zahra Mahmood  
> Jacob McLaren  
> Kathleen Minckler  
> Linette Velez

## Installation

### Prerequisites

- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://cli.angular.io/)
- [Python 3.11](https://www.python.org/downloads/)
- [pipenv](https://pipenv.pypa.io/en/latest/)

## Running the App Locally

After cloning the repo, navigate from a terminal to the root directory and run the following commands:  

1. Install dependencies: `npm run install-dependencies`
2. Build & run the back-end: `npm run server` (leave this running)
3. Build & run the front-end: `npm run client` (leave this running)
4. Navigate to `http://localhost:4200/`

Alternatively, to install and run just the front-end, run: `npm install && npm run client`.  
For just the back-end: `pipenv install && pipenv run flask run`

*Note*: By default, the app is lacking database credentials, and so will use mock data stored in /src/assets. To connect the app to a database, you will need to create a file named `.env` in the root directory and save valid credentials for a MongoDB database here. The file should look like this:  

```dotenv
    MONGODB_USERNAME=db-user  
    MONGODB_PASSWORD=anafwe71q38249tybgerv789
```

### Development Options

During development, the server can instead be run in a manner better suited for hot-reloading on file changes. To do this, run `npm run server-dev` instead.

#### Running Tests

- Front-end unit tests: `npm run test-client`  
- Cypress tests: `npm run test-e2e`  
- Back-end unit tests: `npm run test-server`
