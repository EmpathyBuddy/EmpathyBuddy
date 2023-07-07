# Empathy buddy-server
EmpathyBuddy is a platform where you can give and receive empathy. Creating a moment in daily life to request empathic listening is something well established among people initiated in Non Violent Communication. The idea is simple, two people agree on a time limit and one of them offers the wonderful gift of their full presence. There is no back and force talking or judging, there is just empathy. This application provides a global platform where people can connect instantly.

## About

REST API for a project management app.

- This repo implements the backend REST API (built in Express + MongoDB).
- A repository for with the frontend (React App) can be found here: (https://github.com/EmpathyBuddy/empathy-buddy-client)



## Instructions

To run in your computer, follow these steps:
- clone 
- install dependencies: `npm install`
- create a `.env` file with the following environment variables
  - ORIGIN, with the location to http://localhost:3000
  - TOKEN_SECRET: used to sign auth tokens (example, `TOKEN_SECRET=ilovepizza`)
- run the application: `npm run dev` or `npm start`


## API Endpoints

<br/>

**Auth endpoints**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/auth/signup  | –  | { email: String, password: String }  | Create an account  |
| POST  | /api/auth/login  | –  | { email: String, password: String }  | Login  |
| GET  | /api/auth/verify  | Authorization: Bearer `<jwt>`  | –  | Verify jwt  |


<br/>

**Requests**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/requests  | Authorization: Bearer `<jwt>`  | { date, phone, language, feeling }  | Create new empathy request  |
| GET  | /api/requests  | –  | –  | Get all empathy requests  |
| GET  | /api/requests/:requestId  | –  | – | Get request empathy details  |
| PUT  | /api/requests/:requestId  | Authorization: Bearer `<jwt>`  | { date, phone, language, feeling }  | Update an empathy request  |
| DELETE  | /api/requests/:requestId  | Authorization: Bearer `<jwt>`  | – | Delete an empathy request  |


<br/>

**Posts**

| HTTP verb   | Path | Request Headers | Request body  | Description |
| ------------- | ------------- | ------------- |------------- | ------------- |
| POST  | /api/posts  | -  | {title, description}  | Create new post  |
| GET  | /api/posts  | –  | –  | Get all posts.  |
| GET  | /api/posts/:postId  | –  | – | Get post details.  |


## Demo

A demo of the website can be found here: https://empathy-buddy.netlify.app/
