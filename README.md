# KCSE Results API

A simple **Node.js API** to fetch KCSE results directly from the [KNEC Results Portal](https://results.knec.ac.ke).  

This API allows **any server or frontend** to query KCSE results by providing a student's **index number** and **name**, and returns a **JSON response** containing the student's **mean grade** and **subject results**.

---

## Features

- Fetch results from KNEC dynamically using HTTP requests  
- Returns JSON only (no browsable API)  
- Simple POST endpoint for integration with any frontend or server  
- Built with **Express**, **Axios**, and **Cheerio**  
- Monitoring and process management via **PM2**  

---

## API Endpoint

### POST `/api/kcse`

#### Request Body

```json
{
  "indexNumber": "12345678901",
  "studentName": "JOHN DOE"
}
```
## Response (Success)
```json
{
  "status": "success",
  "message": "Results fetched successfully",
  "data": {
    "student": "12345678901 - JOHN DOE",
    "school": "Some High School",
    "mean_grade": "A",
    "subjects": [
      { "code": "101", "subject": "Mathematics", "grade": "A" },
      { "code": "102", "subject": "English", "grade": "B+" }
      // ...other subjects
    ]
  }
}
```
## Response (Error)
```json
{
  "status": "error",
  "message": "Invalid data submitted"
}
```
# Installation
## Clone the repository

```bash
git clone https://github.com/yourusername/kcse-api.git
cd kcse-api
```
## install depedencies
```bash 
npm install
```
## Running the API in development
```bash
npm run dev
```

## Running the API in production
```bash
npm start
```
# Monitoring with PM2

## PM2 allows you to keep the API alive, restart on crashes, and monitor performance.

### Start with PM2
```bash 
pm2 start src/server.js --name kcse-api
```

### Save PM2 process for reboot
```bash
pm2 save
pm2 startup
```
### Monitor locally
```bash
pm2 status      # Check status of processes
pm2 logs kcse-api  # View logs
pm2 monit       # Real-time CPU, memory, and process monitoring
```