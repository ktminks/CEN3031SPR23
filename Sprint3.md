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

### Back-end: To Do

- Become familiar with Python-Flask
- Write unit tests for everything
- Fix 'edit' functionality (currently non-functional boilerplate code)
  - Routing is correct, error is in edit function in DB_Handlers.py
  - After fix, add working example to documentation (Postman)
- Update README with new dependencies & install / run instructions

## Front-end

### Front-end: Work Completed

- Integrated with back-end (data is pulled from database or falls back to local)
- Separated data services into their own files:
  - recipe-data.service.ts: Handles all data manipulation for components
  - api.service.ts: Communicates with the API or falls back to mock data
  - data-validation.service.ts: Formats data from and to API

### Front-end: To Do

- Add support for adding & deleting recipes
