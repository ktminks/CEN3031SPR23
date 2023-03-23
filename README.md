# Software Engineering Project for CEN3031 (SPR23)

## RECIPE BOOK / MEAL PLANNER

### DESCRIPTION

Users can add their own recipes, edit, and delete them.  
Users can log in using social media accounts (just Google at first).  
Recipes will be stored as long as the user's account remains active and can be accessed at any time.  
As stretch goals:  
Users will be able to plan their meals for the week using their stored recipes.  
Users can search for recipes to import via an external API as well.

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

## Running the Full-Stack App

1. Clone the repo
2. Install dependencies: `npm run install-dependencies`
3. Build & run the front-end: `npm run client` (leave this running)
4. Build & run the back-end: `npm run server` (leave this running)
5. Navigate to `http://localhost:4200/`

## Running Client & Server Separately

### Build & Run Frontend

> - Download & install dependencies: `npm install`
> - Build & run: `ng serve`
> - Run tests: `ng test`

### Backend

#### Backend: Build & Run Server

> - Download & install dependencies: `pipenv install`
> - Build & run: `flask run`

#### Backend: Dependencies & pipenv

pipenv is the Python equivalent of npm. In larger projects like these, a package manager like this is used to manage all dependencies and environmental variables at once. These dependencies are listed in `Pipfile`, which is the Python equivalent of JavaScript's `package.json`.

> - Check if pipenv is installed: `pipenv --version`
> - Install pipenv: `pip install pipenv`
>   - Once the install is finished, close and reopen the command line.
>   - If you get some variation of the error `pipenv: command not recognized`, you will need to add pipenv's install location to your PATH variable: `where pipenv`
>     - Copy the output of this command and paste it into your PATH variable.
> - Install back-end dependencies: `pipenv install`
>   - Once the dependencies are installed, you're done. This only needs to be done once (per machine).

#### Back-end: Running the Server

In addition to `npm run server`, there is now another option to run the back-end in development mode, which will automatically restart the server/API whenever a file is changed. To do this, run the following command instead:

`npm run server-dev`

Both versions start the server/API on port 4021.
