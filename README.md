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

- [Go](https://golang.org/dl/)
- [Node.js](https://nodejs.org/en/download/)
- [Angular CLI](https://cli.angular.io/)

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

### Build & Run Backend

> - Download & install dependencies: `go get ./src/server/.`
> - Build & run: `go run ./src/server/.`
