# A-unit-converter
A simple web-based tool to convert between metric and imperial units. Built using the MVC (Model-View-Controller) architecture, this project includes a backend powered by Node.js and Express.js and a frontend built with HTML, CSS, and JavaScript.

# Features
-> Conversion between metric and imperial units for:
1. Length (e.g., kilometers to miles, meters to feet).
2. Weight (e.g., kilograms to pounds, grams to ounces).
3. Temperature (e.g., Celsius to Fahrenheit, Kelvin to Celsius).

-> User-friendly interface with dropdowns for unit selection.

-> Results displayed with two decimal places for precision.

# Technologies Used
Frontend:
HTML, CSS, JavaScript

Backend:
Node.js, Express.js

Architecture:
MVC (Model-View-Controller)

# Installation
-> Prerequisites
    Node.js and npm installed on your machine. 

-> Steps
    Clone the repository:
        - git clone https://github.com/your-username/unit-converter.git
    
    Navigate to the backend folder:
        - cd unit-converter/backend
    
    Install dependencies:
        - npm install
    
    Start the backend server:
        - node app.js

    Open the frontend/index.html file in your browser to use the application.

# Usage
1. Open the application in your browser.

2. Select the category (e.g., length, weight, temperature).

3. Enter the value you want to convert.

4. Select the from unit and to unit from the dropdowns.

5. Click Convert to see the result.

# API Endpoint
The backend exposes a single endpoint for unit conversion:

POST /api/convert
Request Body:

json:
{
  "value": "10",
  "category": "length",
  "fromUnit": "km",
  "toUnit": "miles"
}
Response:

json:
{
  "result": 6.21
}

# Contributing
Contributions are welcome! Follow these steps:
1. Fork the repository.
2. Create a new branch:
    - git checkout -b feature/your-feature-name
3. Commit your changes:
    - git commit -m "Add your message here"
4. Push to the branch:
    - git push origin feature/your-feature-name
5. Open a pull request.