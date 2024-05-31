# Real-Time Bidding Platform

This project is a real-time bidding platform built with Node.js, Express, and Sequelize. The platform allows users to place bids on items in real time.


## Installation

### Prerequisites
- Node.js (>= 14.x)
- npm (>= 6.x)
- A running database (MySQL)

### Steps
1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/real-time-bidding-platform.git
    cd real-time-bidding-platform
    ```

2. Install dependencies:
    ```bash
    npm install
    ```

3. Configure the environment variables:
    Create a `.env` file in the root directory and add your database configuration:
    ```env
    DB_HOST=your_database_host
    DB_USER=your_database_user
    DB_PASSWORD=your_database_password
    DB_NAME=your_database_name
    DB_DIALECT=mysql 
    ```

4. Run database migrations:
    ```bash
    npx sequelize-cli db:migrate
    ```

5. Start the development server:
    ```bash
    npm start
    ```

    
###  Rate Limiting Middleware

Install `express-rate-limit`:

```bash
npm install express-rate-limit

###  database 
create schema bidding_db;
user bidding_db;
commit;

## Usage

### Running the Application
After starting the development server, the application will be available at `http://localhost:3000`.

### Running Tests
To run the tests, use:
```bash
npm test
npm install --save-dev mocha chai chai-http

### for docker
docker-compose up --build


API Endpoints
Users
GET /api/users: Get all users
POST /api/users: Create a new user
GET /api/users/:id: Get a single user by ID
PUT /api/users/:id: Update a user by ID
DELETE /api/users/:id: Delete a user by ID
Bids
GET /api/bids: Get all bids
POST /api/bids: Create a new bid
GET /api/bids/:id: Get a single bid by ID
PUT /api/bids/:id: Update a bid by ID
DELETE /api/bids/:id: Delete a bid by ID
Items
GET /api/items: Get all items
POST /api/items: Create a new item
GET /api/items/:id: Get a single item by ID
PUT /api/items/:id: Update an item by ID
DELETE /api/items/:id: Delete an item by ID
