
# Pokédex

This repository is a template for a Pokédex application. It contains:
- A server-side REST API built using [NestJS](https://nestjs.com).
- A client-side single-page application (SPA) built using [Angular](https://angular.dev).


## Setup

1. Clone the repository:
   ```shell
   git clone https://github.com/your-username/pokedex.git
   cd pokedex
   ```

2. Install dependencies:
   - For the API:
     ```shell
     cd api/
     npm install
     ```
   - For the app:
     ```shell
     cd ../app/
     npm install
     ```

---

## Run the Project

Start the API and the app in two separate shells:

1. **Start the API**:
   ```shell
   cd api/
   npm run start
   ```
   By default, the API will run at `http://localhost:3000`.

2. **Start the App**:
   ```shell
   cd app/
   npm run start
   ```
   By default, the app will run at `http://localhost:4200`.

---

## Tests

### API Tests
The API uses [Jest](https://jestjs.io/) for unit and integration testing.

To run the tests:
```shell
cd api/
npm test
```