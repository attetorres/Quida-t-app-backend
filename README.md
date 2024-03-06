# QUIDA-T

## DESCRIPTION
Task lists management app for therapists, patients, and general users, enabling the sharing of task lists and tracking their completion on a daily, weekly, or monthly basis.

## TEAM
- Atteneri Torres González: https://github.com/attetorres
- Aitor Díaz Santana: https://github.com/ocsilisab
- Fran Arteaga: https://github.com/franArteaga8

## TECH
[![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?logo=javascript&logoColor=black)](https://developer.mozilla.org/en-US/docs/Web/JavaScript)
[![Node.js](https://img.shields.io/badge/Node.js-339933?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Express](https://img.shields.io/badge/Express-000000?logo=express&logoColor=white)](https://expressjs.com/)
[![Sequelize](https://img.shields.io/badge/Sequelize-52B0E7?logo=sequelize&logoColor=white)](https://sequelize.org/)
[![MySQL](https://img.shields.io/badge/MySQL-4479A1?logo=mysql&logoColor=white)](https://www.mysql.com/)

## INSTALLATION
Run `$ npm i` on console

Config a `.env` file as explained on `.env.example`

## DATABASE

### DATA STRUCTURE & MODELS
![image](https://github.com/attetorres/cuida-t-app/assets/110516703/9ad0064b-a662-4325-bd5c-97ec19feaaf0)

### DB_TABLES


## API ROUTES

### AUTH ENDPOINTS

- `/api/register`: Endpoint for user registration.
- `/api/login`: Endpoint for user login.


### USER ENDPOINTS

- `/api/users`: Endpoint to retrieve a list of all users.
- `/api/profile`: Endpoint for user profile management.
- `/api/users/assigned`: Endpoint for psychologists to retrieve their assigned users.
- `/api/users/:userId`: Endpoint to retrieve detailed information about a specific user.
- `/api/users/:userId/request`: Endpoint for psychologists to send requests to specific users.

  
### LIST ENDPOINTS

- `/api/lists/created`: Endpoint to retrieve lists created by the authenticated user.
- `/api/lists/assigned`: Endpoint to retrieve lists assigned to the authenticated user.
- `/api/lists`: Endpoints for managing lists (CRUD operations).
- `/api/lists/:list_id`: Endpoint to retrieve, update, or delete a specific list.

  
### TASK ENDPOINTS

- `/api/lists/:list_id/tasks`: Endpoints for managing tasks within a specific list (CRUD operations).
- `/api/lists/:list_id/tasks/:task_id`: Endpoint to retrieve, update, or delete a specific task within a list.
- `/api/lists/:list_id/tasks/:task_id/complete`: Endpoint to mark a task as completed within a specific list.
